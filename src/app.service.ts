import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'What the fck man';
  }
  postHello(): string {
    return 'This is post method';
  }
  patchFunc(): string {
    return 'Patching'
  }
  deleteFunc(): string {
    return 'Deleting'
  }
  putFunc(): string {
    return 'Putting the existing'
  }
}
