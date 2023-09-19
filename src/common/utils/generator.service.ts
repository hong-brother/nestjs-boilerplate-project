import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export class GeneratorService {
  public uuid(): string {
    return uuid();
  }
}
