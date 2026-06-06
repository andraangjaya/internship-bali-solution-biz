import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-project-page',
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
})
export class ProjectPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('visoraSection')
  visoraSection?: ElementRef<HTMLElement>;

  @ViewChild('visoraMedia')
  visoraMedia?: ElementRef<HTMLElement>;

  @ViewChild('visoraContent')
  visoraContent?: ElementRef<HTMLElement>;

  @ViewChild('visoraTitle')
  visoraTitle?: ElementRef<HTMLElement>;

  @ViewChild('visoraButton')
  visoraButton?: ElementRef<HTMLElement>;

  @ViewChild('visoraDescription')
  visoraDescription?: ElementRef<HTMLElement>;

  @ViewChild('mbagiSection')
  mbagiSection?: ElementRef<HTMLElement>;

  @ViewChild('mbagiMedia')
  mbagiMedia?: ElementRef<HTMLElement>;

  @ViewChild('mbagiContent')
  mbagiContent?: ElementRef<HTMLElement>;

  @ViewChild('mbagiTitle')
  mbagiTitle?: ElementRef<HTMLElement>;

  @ViewChild('mbagiButton')
  mbagiButton?: ElementRef<HTMLElement>;

  @ViewChild('mbagiDescription')
  mbagiDescription?: ElementRef<HTMLElement>;

  private projectPageTimeline?: gsap.core.Timeline;

  ngAfterViewInit() {
    const visoraSection = this.visoraSection?.nativeElement;
    const visoraMedia = this.visoraMedia?.nativeElement;
    const visoraContent = this.visoraContent?.nativeElement;
    const visoraTitle = this.visoraTitle?.nativeElement;
    const visoraButton = this.visoraButton?.nativeElement;
    const visoraDescription = this.visoraDescription?.nativeElement;
    const mbagiSection = this.mbagiSection?.nativeElement;
    const mbagiMedia = this.mbagiMedia?.nativeElement;
    const mbagiContent = this.mbagiContent?.nativeElement;
    const mbagiTitle = this.mbagiTitle?.nativeElement;
    const mbagiButton = this.mbagiButton?.nativeElement;
    const mbagiDescription = this.mbagiDescription?.nativeElement;

    if (
      !visoraSection ||
      !visoraMedia ||
      !visoraContent ||
      !visoraTitle ||
      !visoraButton ||
      !visoraDescription ||
      !mbagiSection ||
      !mbagiMedia ||
      !mbagiContent ||
      !mbagiTitle ||
      !mbagiButton ||
      !mbagiDescription
    ) {
      return;
    }

    gsap.set([visoraSection, mbagiSection], {
      autoAlpha: 0,
      y: 50,
    });

    gsap.set([visoraMedia, mbagiMedia], {
      autoAlpha: 0,
      y: 36,
      scale: 0.98,
    });

    gsap.set(
      [visoraTitle, visoraButton, visoraDescription, mbagiTitle, mbagiButton, mbagiDescription],
      {
        autoAlpha: 0,
        y: 24,
      }
    );

    this.projectPageTimeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });

    this.projectPageTimeline
      .to(visoraSection, {
        autoAlpha: 1,
        y: 0,
        duration: 1.0,
      })
      .to(
        visoraMedia,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
        },
        '<0.08'
      )
      .to(
        [visoraTitle, visoraButton, visoraDescription],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
        },
        '<0.12'
      )
      .to(
        mbagiSection,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.0,
        },
        '+=0.1'
      )
      .to(
        mbagiMedia,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
        },
        '<0.08'
      )
      .to(
        [mbagiTitle, mbagiButton, mbagiDescription],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
        },
        '<0.12'
      );
  }

  ngOnDestroy() {
    this.projectPageTimeline?.kill();
  }
}
