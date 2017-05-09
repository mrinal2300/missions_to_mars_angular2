import { Injectable } from '@angular/core';
import { MISSIONS } from '../data/seed.missions';

@Injectable()
export class missionService {
    currentId: number = 1;
    getMissions(): Missions[] {
        return MISSIONS;
    }
}