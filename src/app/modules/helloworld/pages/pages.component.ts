import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from 'src/app/share/topic.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(private router: Router, private topic: TopicService) {}
  //   const router = useRouter();
  // const locale = useLocale();
  // const topic = useTopic();
  // const store = useStore("helloworld");

  handleClick = (type: string) => {
    switch (type) {
      case 'dengchu':
        this.router.navigate(['/login']);
        break;
      case 'language':
        // locale.value = locale.value === "zh_CN" ? "en_US" : "zh_CN";
        break;
      case 'huanfu':
        const topic = this.topic.useTopic();
        topic.value = topic.value === 'night' ? 'sunny' : 'night';
        break;
      case 'github':
        window.open('https://github.com/7INXIAL/7VCOMPOSITIONAL');
        break;
    }
  };
}
