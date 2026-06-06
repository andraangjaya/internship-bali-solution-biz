import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MarqueComponent } from '../../components/marque/marque.component';

interface CompanyCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface JourneyCard {
  number: string;
  title: string;
  description: string;
}

interface ProjectCard {
  fragment: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
}

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-page',
  imports: [
    MarqueComponent,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements AfterViewInit, OnDestroy {
  constructor(private readonly route: ActivatedRoute) { }

  @ViewChild('companySection')
  companySection?: ElementRef<HTMLElement>;

  @ViewChild('companyTitle')
  companyTitle?: ElementRef<HTMLElement>;

  @ViewChild('companyDescription')
  companyDescription?: ElementRef<HTMLElement>;

  @ViewChild('companyImage')
  companyImage?: ElementRef<HTMLImageElement>;

  @ViewChildren('journeyBody')
  journeyBodies?: QueryList<ElementRef<HTMLElement>>;

  @ViewChildren('journeyToggleIcon')
  journeyToggleIcons?: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('journeySection')
  journeySection?: ElementRef<HTMLElement>;

  @ViewChild('journeyHeaderRow')
  journeyHeaderRow?: ElementRef<HTMLElement>;

  @ViewChildren('journeyItem')
  journeyItemRefs?: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('skillsSection')
  skillsSection?: ElementRef<HTMLElement>;

  @ViewChild('skillsHeaderRow')
  skillsHeaderRow?: ElementRef<HTMLElement>;

  @ViewChildren('skillCard')
  skillCardRefs?: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('projectSection')
  projectSection?: ElementRef<HTMLElement>;

  @ViewChild('projectHeaderRow')
  projectHeaderRow?: ElementRef<HTMLElement>;

  @ViewChildren('projectCard')
  projectCardsRefs?: QueryList<ElementRef<HTMLElement>>;

  companyCardIndex = 0;
  companyCards: CompanyCard[] = [
    {
      title: 'Bali Solution Biz',
      description: 'Bali Solution Biz adalah startup yang bergerak dibidang Informasi Teknologi untuk penyedia dan pengembangan perangkat lunak / Software yang beralamat di Jln. Suli, No.87, Dangin Puri Kangin, Denpasar - Bali. Dengan pengalaman hamper 10 tahun di dunia informasi teknologi,team kami juga dapat membantu konsultasi tentang pemanfaatan teknologi informasi dalam perusahaan BALI SOLUTION BIZ agar tercapainya efisiensi maksimal.',
      image: 'images/logo-solbiz.jpg',
      alt: 'Solution Biz'
    },
    {
      title: 'Internship Program',
      description: 'Bali Solution Biz menerima peserta magang dengan durasi program selama 6 bulan. Pada tahap awal, peserta akan mengikuti pelatihan sesuai dengan bidang yang dipilih untuk memahami teknologi, alur kerja, dan standar yang digunakan perusahaan. Setelah menyelesaikan pelatihan, peserta akan diberikan proyek nyata (real-world project) yang dikerjakan dalam tim yang terdiri dari Frontend Developer, Backend Developer, dan UI/UX Designer untuk mensimulasikan lingkungan kerja profesional.',
      image: 'images/program-magang.jpg',
      alt: 'Internship'
    },
    {
      title: 'Services',
      description: 'Bali Solution Biz menyediakan berbagai layanan teknologi untuk membantu individu maupun perusahaan dalam mengembangkan dan mengoptimalkan solusi digital. Layanan yang ditawarkan meliputi penjualan lisensi aplikasi untuk mendukung kebutuhan operasional bisnis, konsultasi teknologi untuk membantu menentukan solusi yang tepat sesuai kebutuhan, serta jasa pengembangan website yang dirancang secara profesional, responsif, dan sesuai dengan tujuan bisnis klien.',
      image: 'images/koperasi-solbiz-cropped.jpg',
      alt: 'Service'
    },
  ];

  selectCompanyCard(index: number) {
    if (this.companyCardIndex === index) {
      return;
    }

    this.companyCardIndex = index;
    requestAnimationFrame(() => this.playCompanyTransition());
  }

  journeyExpandedIndex = -1;
  journeyCards: JourneyCard[] = [
    {
      number: '01.',
      title: 'Backend Tools',
      description: 'Pertama kali PKL diberikan tugas untuk eksplorasi berbagai tools backend seperti Laravel, Laragon, MySQL dan Postman untuk memahami proses pengembangan aplikasi, pengelolaan database, serta untuk bisa memenuhi role backend.'
    },
    {
      number: '02.',
      title: 'Laravel Fundamentals',
      description: 'Saya memahami konsep MVC (Model, View, Controller) serta alur request dari Routes menuju Controller, Service, Model, hingga database. Saya juga mempelajari penggunaan Middleware untuk mengelola akses dan Resource untuk customize response format API.'
    },
    {
      number: '03.',
      title: 'REST API dan CRUD',
      description: 'Mempelajari konsep REST API untuk mengelola client request yang akan di validasi oleh server dan dilakukan business logic untuk memenuhi request dengan mengakses database kemudian mengembalikannya sebagai response ke client melalui API ini.'
    },
    {
      number: '04.',
      title: 'Token Based Authentication dan Authorization',
      description: 'Saya mempelajari dan mengimplementasikan konsep ini untuk melindungi akses API. Authentication saya gunakan untuk mengenali user dan authorization untuk memastikan user memenuhi kriteria dalam mengakses endpoint tertentu'
    },
    {
      number: '05.',
      title: 'Frontend Tools dan Layouting dengan Tailwind CSS',
      description: 'Saya mengeksplorasi berbagai tools frontend seperti Angular, Tailwind CSS, dan TypeScript untuk membuat website seperti ini. Selain itu saya juga mempelajari layouting dengan flexbox dan grid untuk membuat tampilan yang terstruktur.'
    },
    {
      number: '06.',
      title: 'Deployment dan Hosting',
      description: 'Setelah saya membuat sebuah aplikasi dengan Laravel dan website dengan Angular, saya melakukan deployment dan hosting yang sudah mencakup database, server, dan konfigurasi ENV. Untuk Angular saya menggunakan Vercel, sedangkan Laravel menggunakan Railway, dengan ini website dapat diakses oleh publik.'
    },
  ];

  skills: string[] = [
    'Angular',
    'Tailwind CSS',
    'Laravel',
    'REST API',
    'MySQL',
    'Postman',
    'Vercel',
    'Railway',
  ];

  selectJourneyCard(index: number) {
    const nextIndex = this.journeyExpandedIndex === index ? -1 : index;

    if (this.journeyExpandedIndex === nextIndex) {
      return;
    }

    const previousIndex = this.journeyExpandedIndex;
    this.journeyExpandedIndex = nextIndex;
    this.playJourneyTransition(previousIndex, nextIndex);
  }

  projectCards: ProjectCard[] = [
    {
      fragment: 'visora',
      title: 'Visora - Product Catalog Management',
      description: 'Visora adalaha dadadada',
      image: '/images/visora-view-home.png',
      alt: 'Visora',
      tags: [
        'API Integration',
        'Laravel'
      ]
    },
    {
      fragment: 'mbagi',
      title: 'Mbagi - Berbagi Makanan Sisa',
      description: 'Visora adalaha dadadada',
      image: '/images/web-mbagi.png',
      alt: 'Visora',
      tags: [
        'Slicing',
        'Angular',
        'Tailwind CSS',
      ]
    },
  ]

  private companyEntranceTimeline?: gsap.core.Timeline;
  private companyTransitionTimeline?: gsap.core.Timeline;
  private journeyTransitionTimeline?: gsap.core.Timeline;
  private journeyScrollTrigger?: ScrollTrigger;
  private journeyEntranceTimeline?: gsap.core.Timeline;
  private journeyEntranceScrollTrigger?: ScrollTrigger;
  private skillsEntranceTimeline?: gsap.core.Timeline;
  private skillsEntranceScrollTrigger?: ScrollTrigger;
  private projectEntranceTimeline?: gsap.core.Timeline;
  private projectScrollTrigger?: ScrollTrigger;

  ngAfterViewInit() {
    if (this.companySection && this.companyImage) {
      const sectionElement = this.companySection.nativeElement;
      const companyImageElement = this.companyImage.nativeElement;
      const animatedElements = sectionElement.querySelectorAll(
        '.company-animate-item'
      );

      this.companyEntranceTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 75%',
          once: true,
        },
      });

      this.companyEntranceTimeline
        .fromTo(
          animatedElements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power1.out',
          }
        )
        .fromTo(
          companyImageElement,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power1.out',
          },
          '<0.15'
        );
    }

    this.syncJourneyAccordionState();

    this.setupJourneyEntranceAnimation();
    this.setupSkillsEntranceAnimation();
    this.setupProjectEntranceAnimation();

    const fragment = this.route.snapshot.fragment;

    if (fragment) {
      requestAnimationFrame(() => {
        this.scrollToSection(fragment);
      });
    }
  }

  ngOnDestroy() {
    this.companyEntranceTimeline?.kill();
    this.companyTransitionTimeline?.kill();
    this.journeyTransitionTimeline?.kill();
    this.journeyScrollTrigger?.kill();
    this.journeyEntranceTimeline?.kill();
    this.journeyEntranceScrollTrigger?.kill();
    this.skillsEntranceTimeline?.kill();
    this.skillsEntranceScrollTrigger?.kill();
    this.projectEntranceTimeline?.kill();
    this.projectScrollTrigger?.kill();
  }

  private scrollToSection(fragment: string) {
    const sectionElement = this.getSectionElement(fragment);

    if (!sectionElement) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const topOffset = Math.min(window.innerHeight * 0.28, 240);
    const targetTop = Math.max(
      0,
      sectionElement.getBoundingClientRect().top + window.scrollY - topOffset
    );

    window.scrollTo({
      top: targetTop,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    if (prefersReducedMotion) {
      return;
    }

    const animatedChildren = Array.from(sectionElement.children) as HTMLElement[];

    if (animatedChildren.length > 0) {
      gsap.fromTo(
        animatedChildren,
        { y: 18, opacity: 0.65 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );
      return;
    }

    gsap.fromTo(
      sectionElement,
      { y: 18, opacity: 0.65 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      }
    );
  }

  private getSectionElement(fragment: string): HTMLElement | undefined {
    switch (fragment) {
      case 'company':
        return this.companySection?.nativeElement;
      case 'journey':
        return this.journeySection?.nativeElement;
      case 'skills':
        return this.skillsSection?.nativeElement;
      case 'projects':
        return this.projectSection?.nativeElement;
      default:
        return undefined;
    }
  }

  private setupJourneyEntranceAnimation() {
    const sectionElement = this.journeySection?.nativeElement;
    const headerElement = this.journeyHeaderRow?.nativeElement;
    const itemElements = this.journeyItemRefs?.toArray().map((item) => item.nativeElement) ?? [];

    if (!sectionElement || !headerElement || itemElements.length === 0) {
      return;
    }

    gsap.set(headerElement, {
      autoAlpha: 0,
      y: 28,
    });

    gsap.set(itemElements, {
      autoAlpha: 0,
      y: 42,
    });

    this.journeyEntranceScrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: 'top 72%',
      once: true,
      onEnter: () => {
        this.journeyEntranceTimeline?.kill();
        this.journeyEntranceTimeline = gsap.timeline();

        this.journeyEntranceTimeline
          .to(headerElement, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          })
          .to(
            itemElements,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.25,
              ease: 'power3.out',
            },
            '-=0.12'
          );

        this.journeyEntranceTimeline.call(() => {
          this.selectJourneyCard(0);
        });
      },
    });
  }

  private setupSkillsEntranceAnimation() {
    const sectionElement = this.skillsSection?.nativeElement;
    const headerElement = this.skillsHeaderRow?.nativeElement;
    const cardElements = this.skillCardRefs?.toArray().map((card) => card.nativeElement) ?? [];

    if (!sectionElement || !headerElement || cardElements.length === 0) {
      return;
    }

    gsap.set(headerElement, {
      autoAlpha: 0,
      y: 28,
    });

    gsap.set(cardElements, {
      autoAlpha: 0,
      y: 38,
      scale: 0.96,
    });

    this.skillsEntranceScrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: 'top 72%',
      once: true,
      onEnter: () => {
        this.skillsEntranceTimeline?.kill();
        this.skillsEntranceTimeline = gsap.timeline();

        this.skillsEntranceTimeline
          .to(headerElement, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          })
          .to(
            cardElements,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.52,
              stagger: 0.26,
              ease: 'power3.out',
              clearProps: 'transform',
            },
            '-=0.12'
          );
      },
    });
  }

  private setupProjectEntranceAnimation() {
    const sectionElement = this.projectSection?.nativeElement;
    const headerElement = this.projectHeaderRow?.nativeElement;
    const projectCardElements = this.projectCardsRefs?.toArray().map((card) => card.nativeElement) ?? [];

    if (!sectionElement || !headerElement || projectCardElements.length === 0) {
      return;
    }

    gsap.set(headerElement, {
      autoAlpha: 0,
      y: 28,
    });

    gsap.set(projectCardElements, {
      autoAlpha: 0,
      y: 48,
      scale: 0.98,
    });

    this.projectScrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        this.projectEntranceTimeline?.kill();
        this.projectEntranceTimeline = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        });

        this.projectEntranceTimeline
          .to(headerElement, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          })
          .to(
            projectCardElements,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.24,
              clearProps: 'transform',
            },
            '-=0.12'
          );
      },
    });
  }

  private playCompanyTransition() {
    const titleElement = this.companyTitle?.nativeElement;
    const descriptionElement = this.companyDescription?.nativeElement;
    const imageElement = this.companyImage?.nativeElement;

    if (!titleElement || !descriptionElement || !imageElement) {
      return;
    }

    this.companyTransitionTimeline?.kill();
    this.companyTransitionTimeline = gsap.timeline();

    this.companyTransitionTimeline
      .fromTo(
        [titleElement, descriptionElement],
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power1.out',
        }
      )
      .fromTo(
        imageElement,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
        '<0.1'
      );
  }

  private syncJourneyAccordionState() {
    const bodies = this.journeyBodies?.toArray() ?? [];
    const icons = this.journeyToggleIcons?.toArray() ?? [];

    bodies.forEach((body, index) => {
      gsap.set(body.nativeElement, {
        height: index === this.journeyExpandedIndex ? 'auto' : 0,
        opacity: index === this.journeyExpandedIndex ? 1 : 0,
        overflow: 'hidden',
      });
    });

    icons.forEach((icon, index) => {
      gsap.set(icon.nativeElement, {
        rotate: index === this.journeyExpandedIndex ? 45 : 0,
      });
    });
  }

  private playJourneyTransition(previousIndex: number, nextIndex: number) {
    const bodies = this.journeyBodies?.toArray() ?? [];
    const icons = this.journeyToggleIcons?.toArray() ?? [];
    const previousBody = bodies[previousIndex]?.nativeElement;
    const nextBody = bodies[nextIndex]?.nativeElement;
    const previousIcon = icons[previousIndex]?.nativeElement;
    const nextIcon = icons[nextIndex]?.nativeElement;

    if (!previousBody && !nextBody) {
      return;
    }

    this.journeyTransitionTimeline?.kill();
    this.journeyTransitionTimeline = gsap.timeline();

    if (previousBody) {
      gsap.set(previousBody, {
        height: previousBody.scrollHeight,
        opacity: 1,
      });
      this.journeyTransitionTimeline.to(
        previousBody,
        {
          height: 0,
          opacity: 0,
          duration: 0.28,
          ease: 'power2.inOut',
        },
        0
      );
    }

    if (previousIcon) {
      this.journeyTransitionTimeline.to(
        previousIcon,
        {
          rotate: 0,
          duration: 0.22,
          ease: 'power2.out',
        },
        0
      );
    }

    if (nextBody) {
      gsap.set(nextBody, {
        height: 0,
        opacity: 0,
        overflow: 'hidden',
      });
      this.journeyTransitionTimeline.to(
        nextBody,
        {
          height: nextBody.scrollHeight,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          onComplete: () => {
            if (this.journeyExpandedIndex === nextIndex) {
              gsap.set(nextBody, {
                height: 'auto',
              });
            }
          },
        },
        0
      );
    }

    if (nextIcon) {
      this.journeyTransitionTimeline.to(
        nextIcon,
        {
          rotate: 45,
          duration: 0.13,
          ease: 'power2.out',
        },
        0
      );
    }
  }
}
