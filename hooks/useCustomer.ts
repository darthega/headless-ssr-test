import { createContext, useContext } from 'react';

export const defaultCustomer: any = {
  isRegistered: false,
  customerId: '',
};

export const CustomerContext = createContext({ ...defaultCustomer });

export const useCustomer = () => useContext(CustomerContext);
