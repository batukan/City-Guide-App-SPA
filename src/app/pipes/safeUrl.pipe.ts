import { DomSanitizer } from '@angular/platform-browser';
import { Pipe } from '@angular/core';

@Pipe({ name: 'safeUrl' })
export class SafeUrl {
    constructor(private sanitizer: DomSanitizer) { }

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustHtml(style
            .replace('<style>', '&lt;style&gt;')
            .replace('</style>', '&lt;/style&gt;')
            .replace('<script>', '&lt;script&gt;')
            .replace('</script>', '&lt;/script&gt;'));
    }
}