'use client';
import { SWRConfig } from 'swr'
interface Props{
  children:React.ReactNode,
  initialData:{},
}
export const SWRConsumer = ({ children,initialData }:Props) => {
  return <SWRConfig 
    value={{ 
      fallback:initialData,
     }}
  >{children}</SWRConfig>
};