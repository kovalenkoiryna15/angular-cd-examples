import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppUserProfileComponent implements DoCheck, OnInit {
  isAuthorized: boolean = false;

  userId: string = '1234567890';

  constructor (
    private readonly userService: UserService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngDoCheck(): void {
    console.log('app-user-profile - DoCheck');
  }

  ngOnInit(): void {
    /* Example 1 */
    // this.isAuthorized = true;
    // setTimeout(() => {
    //   console.log(this.isAuthorized);
    // }, 0);

    /* Example 2 */
    // setTimeout(() => {
    //   this.isAuthorized = true;
    //   console.log(this.isAuthorized);
    //   this.cdr.markForCheck();
    // }, 0);

    /* Example 3 */
    // this.userService.user$.subscribe(({ isAuthorized }) => {
      // this.isAuthorized = isAuthorized;
      // console.log(this.isAuthorized);
      // this.cdr.detectChanges();
    // });
  }

  handleLogIn() {
    this.isAuthorized = true;
  }
}
