import { OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { Alert } from '../model/alert.model';
import { Observable } from 'rxjs';
import { AlertConfig } from '../model/alert-config.model';
export declare class AlertComponent implements OnInit {
    private config;
    private alertService;
    alerts: Observable<Alert[]>;
    constructor(config: AlertConfig, alertService: AlertService);
    ngOnInit(): void;
    close(alert: Alert): void;
    get positionX(): "left" | "right";
    get positionY(): "bottom" | "top";
    get classes(): string;
    private initConfig;
}
