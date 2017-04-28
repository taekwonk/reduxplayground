import { InMemoryDbService, 
    createErrorResponse, 
    HttpMethodInterceptorArgs, 
    createObservableResponse } from 'angular-in-memory-web-api';

export class FiledService implements InMemoryDbService {
    createDb() {
        let filed = [
            {
                id: 1,
                name: 'name1'
            },
            {
                id: 2,
                name: 'name2'
            },
            {
                id: 3,
                name: 'name3'
            },
            {
                id: 4,
                name: 'name4'
            }
        ];

        return {filed};
    }
}