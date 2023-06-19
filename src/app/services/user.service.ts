import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Observable<any> = of({ name: 'Tod', isAuthorized: true }).pipe(delay(0));
}

