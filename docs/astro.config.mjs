// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Firefox Profiler',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/firefox-devtools/profiler',
        },
        {
          icon: 'matrix',
          label: 'Firefox Profiler on Matrix',
          href: 'https://chat.mozilla.org/#/room/#profiler:mozilla.org',
        },
      ],
      sidebar: [
        {
          label: 'User Guide',
          items: [
            { label: 'Getting Started', slug: 'user/guide-getting-started' },
            {
              label: 'UI Tour: The Timeline',
              slug: 'user/guide-ui-tour-timeline',
            },
            {
              label: 'UI Tour: The Panels',
              slug: 'user/guide-ui-tour-panels',
            },
            {
              label: 'Profiler Fundamentals',
              slug: 'user/guide-profiler-fundamentals',
            },
            {
              label: 'Stack Samples and Call Trees',
              slug: 'user/guide-stack-samples-and-call-trees',
            },
            {
              label: 'Filtering Call Trees',
              slug: 'user/guide-filtering-call-trees',
            },
            {
              label: 'Profiling Firefox for Android',
              items: [
                {
                  label: 'Overview',
                  slug: 'user/guide-profiling-firefox-android',
                },
                { label: 'Remote Profiling', slug: 'user/guide-remote-profiling' },
                {
                  label: 'Profiling Directly on Device',
                  slug: 'user/guide-profiling-android-directly-on-device',
                },
              ],
            },
            {
              label: 'Memory Allocations',
              slug: 'user/memory-allocations',
            },
            {
              label: 'Removing the Profiler',
              slug: 'user/guide-removing-profiler',
            },
          ],
        },
        {
          label: 'Advanced Topics',
          items: [
            { label: 'Overview', slug: 'user/advanced-topics' },
            {
              label: 'Profiling Firefox Startup & Shutdown',
              slug: 'user/guide-startup-shutdown',
            },
            {
              label: 'Perf Profiling on Linux',
              slug: 'user/guide-perf-profiling',
            },
            {
              label: 'Perf Profiling on Android',
              slug: 'user/guide-android-profiling',
            },
            { label: 'IPC Messages', slug: 'user/ipc-messages' },
            {
              label: 'POSIX Signal Control',
              slug: 'user/async-posix-signal-control',
            },
          ],
        },
        {
          label: 'Video Tutorials',
          items: [
            { label: 'Overview', slug: 'user/videos' },
            { label: 'Firefox Profiler Intro', slug: 'user/videos-intro' },
            { label: 'Samples and Markers', slug: 'user/videos-samples-markers' },
            {
              label: 'Call Tree Part 1: The Basics',
              slug: 'user/videos-call-tree-1',
            },
            {
              label: 'Call Tree Part 2: Real Recording',
              slug: 'user/videos-call-tree-2',
            },
            {
              label: 'Call Tree Part 3: Branching',
              slug: 'user/videos-call-tree-3',
            },
            {
              label: 'Multiple Threads & Async',
              slug: 'user/videos-threads',
            },
          ],
        },
        {
          label: 'Case Studies',
          items: [
            { label: 'Overview', slug: 'user/case-studies' },
            { label: '2D Canvas & Worker Messaging', slug: 'user/bunny' },
            { label: 'Harnessing Parallelism', slug: 'user/bunny-2' },
          ],
        },
        {
          label: 'Developer Docs',
          items: [
            { label: 'Overview', slug: 'developer' },
            { label: 'Architecture', slug: 'developer/architecture' },
            {
              label: 'Loading in Profiles',
              slug: 'developer/loading-in-profiles',
            },
            {
              label: 'Gecko Profile Format',
              slug: 'developer/gecko-profile-format',
            },
            {
              label: 'Processed Profile Format',
              slug: 'developer/processed-profile-format',
            },
            {
              label: 'Writing a Custom Importer',
              slug: 'developer/custom-importer',
            },
            { label: 'Markers', slug: 'developer/markers' },
            {
              label: 'Upgrading Profiles',
              slug: 'developer/upgrading-profiles',
            },
            { label: 'Data Sources', slug: 'developer/data-sources' },
            { label: 'Call Tree', slug: 'developer/call-tree' },
            {
              label: 'Call Nodes in C++',
              slug: 'developer/call-nodes-in-cpp',
            },
            { label: 'Deploying', slug: 'developer/deploying' },
            { label: 'Symbolication', slug: 'developer/symbolication' },
            {
              label: 'GitHub Codespaces',
              slug: 'developer/codespaces',
            },
            {
              label: 'Format Changelog',
              slug: 'developer/format-changelog',
            },
          ],
        },
      ],
    }),
  ],
});
