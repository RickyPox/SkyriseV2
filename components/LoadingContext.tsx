import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
    isLoading: boolean;
    handleVideoEnd: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
    children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading === true) {
        if (typeof window !== 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    } else {
        if (typeof window !== 'undefined' && window.document) {
            document.body.style.overflow = 'unset';
        }
    }

    const handleVideoEnd = () => {
        setIsLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, handleVideoEnd }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
}
