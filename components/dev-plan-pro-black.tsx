'use client';

import React, { useState } from 'react';
import {
  Lightbulb,
  Briefcase,
  Code,
  Layout,
  User,
  ChevronRight,
  BookOpen,
  Rocket,
  Search,
  ChevronLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export function DevPlanProBlack() {
  const stages = [
    {
      icon: Lightbulb,
      title: 'Brainstorming',
      description: 'Generate and explore ideas',
      color: 'from-violet-800 via-emerald-500 to-gray-300'
    },
    {
      icon: Briefcase,
      title: 'Business Analysis',
      description: 'Evaluate market potential',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Tech Stack',
      description: 'Choose your technologies',
      color: 'from-fuchsia-800 via-violet-600 to-rose-200'
    },
    {
      icon: Layout,
      title: 'Design Planning',
      description: 'Plan your app structure',
      color: 'from-purple-400 to-pink-600'
    }
  ];

  const sections = [
    {
      title: 'Stories',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-600',
      items: [
        {
          title: 'Overcoming Technical Debt: A Case Study',
          content: 'Discover how a large enterprise tackled years of...',
          image:
            'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727703089/pexels-steve-4943165_1_o5y0s1.jpg'
        },
        {
          title: 'Success Story: AI-Driven Startup',
          content: 'Learn how a small team leveraged AI to disrupt...',
          image:
            'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727701005/pexels-anniroenkae-2832468_d1bpdc.jpg'
        },
        {
          title: "From Idea to IPO: A Developer's Journey",
          content: 'Follow the inspiring story of a solo developer...',
          image:
            'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727701019/pexels-alexant-4585185_zrztoa.jpg'
        }
      ]
    },

    {
      title: 'Ideas',
      icon: Rocket,
      color: 'from-red-500 to-pink-600',
      items: [
        {
          title: 'AI-Powered Personal Finance Assistant',
          content: 'Imagine an app that uses machine learning to...',
          image:
            'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727706699/pexels-laura-musikanski-821773-6019019_jdadw8.jpg'
        },
        {
          title: 'Blockchain for Supply Chain Transparency',
          content: 'A decentralized system to track products from...',
          image:
            'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727706623/pexels-jonathanborba-14354107_tfnnw1.jpg'
        },
        {
          title: 'VR-Enhanced Remote Collaboration Tool',
          content: 'Create a virtual workspace that simulates...',
          image:
            'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727706367/pexels-sound-on-3761137_gg10zl.jpg'
        }
      ]
    }
    // {
    //   title: 'Research',
    //   icon: Search,
    //   color: 'from-teal-400 to-cyan-600',
    //   items: [
    //     {
    //       title: 'The Impact of Low-Code Platforms',
    //       content: 'Our study reveals how low-code solutions are...',
    //       image:
    //         'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727702809/pexels-olia-danilevich-4974912_mp49wp.jpg'
    //     },
    //     {
    //       title: "Quantum Computing: A Developer's Perspective",
    //       content: 'Exploring the potential applications and...',
    //       image:
    //         'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727702713/pexels-cottonbro-8721342_jav5kr.jpg'
    //     },
    //     {
    //       title: 'Sustainable Software Engineering Practices',
    //       content: 'Investigating methods to reduce the carbon...',
    //       image:
    //         'https://res.cloudinary.com/ds98aq9ei/image/upload/v1727702556/pexels-rdne-5757078_mkjtjs.jpg'
    //     }
    //   ]
    // },
  ];

  const [activeIndices, setActiveIndices] = useState({
    Stories: 0,
    Ideas: 0,
    Research: 0
  });

  const handleScroll = (section, direction) => {
    setActiveIndices((prev) => ({
      ...prev,
      [section]:
        (prev[section] +
          direction +
          sections.find((s) => s.title === section).items.length) %
        sections.find((s) => s.title === section).items.length
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-900">
        <div className="flex items-center">
          <Lightbulb className="h-6 w-6 text-yellow-400 mr-2" />
          <h1 className="text-xl font-semibold text-gray-100">DevPlanPro</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-300 hover:text-gray-100"
        >
          <User className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">
            Start Your Development Journey
          </h2>
          <p className="text-gray-400 mb-8">
            Choose a stage to begin planning your software project:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stages.map((stage, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${stage.color} hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <stage.icon className="h-6 w-6 text-white mr-2" />
                  <CardTitle className="text-white">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-100">{stage.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-white hover:text-gray-200 hover:bg-white/20 p-0"
                  >
                    Start <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* New section with static background image */}
          <div className="relative h-[600px] mb-12 overflow-hidden rounded-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/ds98aq9ei/image/upload/v1727701019/pexels-alexant-4585185_zrztoa.jpg?height=1200&width=2000')",
                backgroundAttachment: 'fixed'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="relative flex flex-col justify-end p-12 h-full">
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionize Your Development Process
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Harness the power of AI and cutting-edge methodologies to
                streamline your software development lifecycle.
              </p>
              <Button className="w-fit bg-white text-black hover:bg-gray-200">
                Learn More
              </Button>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="mb-12">
              <div className="flex justify-between items-center mb-7">
                <h3 className="text-2xl font-bold text-gray-100 flex items-center">
                  <section.icon className="h-6 w-6 mr-2" />
                  {section.title}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleScroll(section.title, -1)}
                    className="text-gray-500 border-gray-700 hover:bg-gray-800"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleScroll(section.title, 1)}
                    className="text-gray-500 border-gray-700 hover:bg-gray-800"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out mb-6"
                  style={{
                    transform: `translateX(-${
                      activeIndices[section.title] * 100
                    }%)`
                  }}
                >
                  {section.items.map((item, index) => (
                    <Card
                      key={index}
                      className={`relative flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] mr-6 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105`}
                    >
                      {/* Adjusted height */}
                      <div className="relative h-96">
                        {' '}
                        {/* Increased height to h-80 */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/50 to-transparent opacity-70"></div>
                      </div>
                      <CardHeader className="absolute inset-0 flex flex-col justify-end p-2">
                        <CardTitle className="text-white text-xl z-10">
                          {item.title}
                        </CardTitle>
                        <CardContent>
                          <p className="text-white mb-2 z-10">{item.content}</p>
                          <Button className="bg-white text-black hover:bg-gray-200 z-10">
                            Read More
                          </Button>
                        </CardContent>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated section without fixed background */}
          <div className="relative h-[600px] mb-12 overflow-hidden rounded-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/ds98aq9ei/image/upload/v1727706493/pexels-tima-miroshnichenko-6499165_lbzgiq.jpg?height=1200&width=2000')",
                 backgroundAttachment: 'fixed'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="relative flex flex-col justify-end p-12 h-full">
              {/* <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionize Your Development Process
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Harness the power of AI and cutting-edge methodologies to
                streamline your software development lifecycle.
              </p> */}
              <Button className="w-fit bg-white text-black hover:bg-gray-200">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Our research</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Index
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Latest advancements
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">DevPlanPro</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  For Everyone
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  For Teams
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  For Enterprises
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">API</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Platform overview
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  API login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Charter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Residency
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 DevPlanPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
