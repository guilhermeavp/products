import { Injectable, OnModuleInit } from '@nestjs/common';
import * as Consul from 'consul';
import { randomUUID } from 'crypto';

@Injectable()
export class ConsulService implements OnModuleInit {
  consul = new Consul({ host: '127.0.0.1' });
  async onModuleInit(): Promise<void> {
    this.consul.watch({
      method: this.consul.health.service,
      options: {
        service: 'product',
        passing: true,
      } as any,
    });
    Consul.Agent.Service.RegisterOptions = {
      name: 'product',
      address: 'localhost',
      port: 4000 as number,
      id: randomUUID,
      check: {
        http: 'http://localhost:4000',
        interval: '5s',
      },
    };
  }
}
