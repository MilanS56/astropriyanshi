import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    getStatus() {
        return {
            status: 'Okay',
            service: 'priyanshii-aasttro-backend'
        }
    }
}
