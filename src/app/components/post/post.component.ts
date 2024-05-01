import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  posts: Array<any> = [];

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.posts.push({
        title: `post ${i}`,
        content: `content ${i}`
      });
    }
  }

}
