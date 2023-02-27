import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const ds = new DataSource({
        type: 'postgres',
        password: 'secret',
        entities: [],
        synchronize: true,
        username: 'postgres',
        database: 'postgres',
      });

      return ds.initialize();
    },
  },
];
