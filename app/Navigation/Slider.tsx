"use client";
import { useCustomer } from "@headless-commerce/hooks/useCustomer";
import { useEffect, useRef } from "react";
import { CountrySelector } from "./CountrySelector";

const setElements = Promise.all([
  import("@suits/ss-design-system/dist/components/ss-button").then(
    ({ defineCustomElement }) => defineCustomElement()
  ),
  import("@suits/ss-design-system/dist/components/ss-side-slider").then(
    ({ defineCustomElement }) => defineCustomElement()
  ),
]);

export function Slider({ data }: any) {
  let mounted = useRef(false);
  const buttonRef = useRef<HTMLSsButtonElement>(null);
  const sliderRef = useRef<HTMLSsSideSliderElement>(null);
  const customer = useCustomer();

  useEffect(() => {
    if (!mounted.current) {
      setElements
        .then(() => {
          mounted.current = true;
        })
        .catch(console.error);
    }

    if (buttonRef.current && sliderRef.current) {
      buttonRef.current.addEventListener("click", () => {
        sliderRef.current?.toggle().catch(console.error);
      });
    }
  }, [buttonRef, sliderRef, mounted]);

  const buttonText = `123 test - ${customer.customerId}`;

  return (
    <div>
      <ss-button ref={buttonRef} label={buttonText}>
        {buttonText}
      </ss-button>
      <ss-side-slider ref={sliderRef}>
        <CountrySelector />
        <br/>
        {data.suSuNavigationMenuCollection.items[0].groupCollection.items.map(
          (group: any) => {
            return group.itemsCollection.items.map((item: any) => {
              return (
                <div key={item.sys.id}>
                  {item.label.text}
                  <br />
                  {item.groupsCollection?.total > 0 && (
                    <>
                      <span>Child groups: {item.groupsCollection.total}</span>
                      {item.groupsCollection.items.map((groupItem: any) => {
                        return groupItem.itemsCollection.items.map(
                          (childItem: any) => {
                            return (
                              <div key={childItem.sys.id}>
                                {item.label.text} - {childItem.label.text}
                                <br />
                                <span>
                                  - Child groups:{" "}
                                  {childItem.groupsCollection.items.length}
                                </span>
                                <br />
                                {childItem.groupsCollection.items.map(
                                  (childGroupItem: any) => {
                                    return childGroupItem.itemsCollection.items.map(
                                      (grandChildItem: any) => {
                                        return (
                                          <div key={grandChildItem.sys.id}>
                                            - {childItem.label.text} -{" "}
                                            {grandChildItem.label.text}
                                            <br />
                                          </div>
                                        );
                                      }
                                    );
                                  }
                                )}
                              </div>
                            );
                          }
                        );
                      })}
                      <br />
                      <span>
                        Child items:{" "}
                        {item.groupsCollection.items.reduce(
                          (acc: number, groupItem: any) => {
                            return acc + groupItem.itemsCollection.items.length;
                          },
                          0
                        )}
                      </span>
                      <br />
                    </>
                  )}
                  <br />
                </div>
              );
            });
          }
        )}
      </ss-side-slider>
    </div>
  );
}
