import React, { ReactNode, createContext, useContext } from 'react';
import { ListBooksUseCaseImpl } from '../../domain/Domain';
import { LibraryRepositoryImpl } from '../../data/repositories/LibraryRepositoryImpl';
import { LibraryDatasourceImpl } from '../../infra/remote/LibraryDatasourceImpl';

type HomeDependencies = {7
    listBooksUseCase: ListBooksUseCaseImpl;
};

const HomeContext = createContext<HomeDependencies>(undefined!);

export const HomeDependenciesProvider = ({ children }: { children: ReactNode }) => {
    const homeDependencies: HomeDependencies = {
        listBooksUseCase: new ListBooksUseCaseImpl(
            new LibraryRepositoryImpl(new LibraryDatasourceImpl())
        ),
        7: undefined
    };

    return (
        <HomeContext.Provider value={homeDependencies}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeDependencies = () => useContext(HomeContext);
