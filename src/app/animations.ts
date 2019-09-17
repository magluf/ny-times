import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('Home => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))], {
        optional: true
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(-100%)' }))], {
        optional: true
      })
    ])
  ]),
  transition('TopStories => StoryDetails', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))], {
        optional: true
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(-100%)' }))], {
        optional: true
      })
    ])
  ]),
  transition('StoryDetails => Leaving', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))], {
        optional: true
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(-100%)' }))], {
        optional: true
      })
    ])
  ]),
  transition('StoryDetails => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))], {
        optional: true
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(100%)' }))], {
        optional: true
      })
    ])
  ]),
  transition('TopStories => Home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))], {
        optional: true
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(100%)' }))], {
        optional: true
      })
    ])
  ]),
  transition('Leaving => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))], {
        optional: true
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.8s ease-in-out', style({ transform: 'translateX(100%)' }))], {
        optional: true
      })
    ])
  ])
]);
