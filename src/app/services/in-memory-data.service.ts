import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const content: Content[] = [
      {
        id: 1,
        title: 'Robinson Crusoe',
        description:
          "By the endof the 19th century, no book in English literary history had enjoyed more editions , spin-offs and translations. Crusoe's world famous novel is complex literary  and it's irresistableafter series of adventourous journey.",
        prize: '$100',
        imgURL:
          'https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg',
        type: 'small',
        tags: ['small', 'medium', 'large'],
      },
      {
        id: 2,
        title: 'Clarissa',
        description:
          " Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy manshe detests, in the book that Samuel Johnson described as  'the first box' world for the knowledge it displays of the human heart",
        prize: '$222',
        imgURL:
          'https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg',
        type: 'medium',
        tags: ['small', 'medium', 'large'],
      },
      {
        id: 3,
        title: 'The Alchemist',
        description:
          "Every few decades of the book is published that changes the lives of its readers forever. This is such a book- a magical fable about learning to listen to your heart, read the omens strewn along life's path and above, all follow your dreams, a magical story.",
        prize: '$400',
        imgURL:
          'https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg',
        type: 'large',
        tags: ['small', 'medium', 'large'],
      },
      {
        id: 4,
        title: 'Emma',
        description:
          "Jane Austen's Emma is her masterpiece , mixing the sparkle of her early books with a deep sensibility.She's young, beutiful and witty. And in her arrogance of her youth, she thrown herself into the game of pitting one heart against the other",
        prize: '$320',
        imgURL:
          'https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg',
        type: 'small',
        tags: ['small', 'medium', 'large'],
      },
      {
        id: 5,
        title: 'Pride and Prejudice',
        description:
          'When Elizabeth Bennet meets Fitzwilliam Darcy for the first time at a ball, she writes him off as an arrogant and obnoxious man.He not only acts like an insufferable snob, but she also overhears him rejecting the very idea of asking her for a dance!',
        prize: '$804',
        imgURL:
          'https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg',
        type: 'medium',
        tags: ['small', 'medium', 'large'],
      },
    ];
    return { content };
  }

  genId(content: Content[]): number {
    return content.length > 0
      ? Math.max(...content.map((c) => c.id)) + 1
      : 2000;
  }
}
