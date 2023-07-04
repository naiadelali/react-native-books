// AppModule.ts

import { DependencyContainer, ReactjectModule, module } from 'reactject';
import { LibraryRepositoryImpl } from './src/modules/books/data/repositories/LibraryRepositoryImpl';
import { ListBooksUseCaseImpl } from './src/modules/books/domain/usecase/ListBooksUseCase';
import { LibraryDatasourceImpl } from './src/modules/books/infra/remote/LibraryDatasourceImpl';


@module()
export class AppModule extends ReactjectModule {
    register(container: DependencyContainer) {
        super.register(container);

        container.registerSingleton(LibraryDatasourceImpl);
        container.registerSingleton(LibraryRepositoryImpl);
        container.registerSingleton(ListBooksUseCaseImpl);
    }
}
