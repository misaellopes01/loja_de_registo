import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({} as any);
interface Props {
    children: React.ReactNode;
}
export function SearchProvider({ children }: Props) {
  const [consultData, setConsultData] = useState<string | number>('')
    const contextValues = { consultData, setConsultData }
    return (
        <SearchContext.Provider value={contextValues}>
            {children}
        </SearchContext.Provider>
    )
}
export function useSearchContext() {
    return useContext(SearchContext);
}