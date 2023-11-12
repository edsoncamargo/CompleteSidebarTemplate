import { Injectable } from '@angular/core';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

@Injectable({
  providedIn: 'root'
})
export class PrismService {

  constructor() { }

  loadLanguages() {
    import('prismjs/components/prism-javascript');
    import('prismjs/components/prism-css');
  }
}
