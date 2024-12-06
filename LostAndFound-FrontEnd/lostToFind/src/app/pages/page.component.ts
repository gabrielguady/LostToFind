import {NavigationExtras, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../../shared/services/app.service';

export class PageComponent<T> {
  private router: Router = new Router();
  public service: AppService<T>;

  constructor(http: HttpClient, url: string) {
    this.service = new AppService<T>(http, url);
  }

  public goToPage(route: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([route], extras).then();
  }
}
