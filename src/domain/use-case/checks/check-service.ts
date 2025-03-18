import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase{
    execute(url: string):Promise<boolean>
};

type SuccesCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckService implements CheckServiceUseCase {
    constructor(
        private readonly logRepository: LogRepository,
        private readonly succesCallback: SuccesCallback,
        private readonly errorCallback: ErrorCallback
    )
    {};

    async execute(url: string): Promise<boolean> {
        const origin = 'check-service.ts';
        try {
            const req = await fetch(url);
            if(!req.ok){
                throw new Error(`Error on check service ${url}`);
            }
            const log = new LogEntity({
                message: `Service ${url} working`, 
                level: LogSeverityLevel.low, 
                origin,
            });
            this.logRepository.saveLog(log)
            this.succesCallback && this.succesCallback();
            return true;
        } catch (error) {
            const ErrorMessage = `${url} is not ok. ${error}`;
            const log = new LogEntity({
                message: ErrorMessage, 
                level: LogSeverityLevel.high, 
                origin,
            });
            this.logRepository.saveLog(log);
            this.errorCallback && this.errorCallback(ErrorMessage)
            return false;
        }
    };
    
};