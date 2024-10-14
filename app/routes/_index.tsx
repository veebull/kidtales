import type { MetaFunction } from '@remix-run/node';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '~/components/ui/card';

export const meta: MetaFunction = () => {
  return [
    { title: 'TinyTales - Magical Stories for Little Adventurers' },
    {
      name: 'description',
      content:
        'Welcome to TinyTales, where every story is a big adventure for little minds!',
    },
  ];
};

export default function Index() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-pink-100 to-purple-200'>
      <div className='container mx-auto px-4 py-8'>
        <header className='mb-12 text-center'>
          <img
            src='https://placehold.co/100x100'
            alt='TinyTales'
            className='mx-auto mb-4 h-20 w-20 rounded-full'
          />
          <h1 className='text-4xl font-bold text-purple-800'>TinyTales</h1>
          <p className='text-xl text-purple-600'>
            Magical Stories for Little Adventurers
          </p>
        </header>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='bg-white/80 backdrop-blur'>
            <CardHeader>
              <CardTitle>Welcome to TinyTales</CardTitle>
              <CardDescription>
                Where imagination comes to life!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Embark on magical journeys tailored just for your little ones!
              </p>
              <div className='mt-4 space-x-2'>
                <Button>Sign Up</Button>
                <Button variant='outline'>Log In</Button>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-white/80 backdrop-blur'>
            <CardHeader>
              <CardTitle>AI-Powered Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-inside list-disc space-y-2'>
                <li>Personalized tales for your child's adventure</li>
                <li>Adaptive storytelling based on preferences</li>
                <li>Multi-language support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className='bg-white/80 backdrop-blur'>
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-inside list-disc space-y-2'>
                <li>Boost imagination and creativity</li>
                <li>Improve language skills</li>
                <li>Promote cultural awareness</li>
                <li>Motivational content for kids</li>
              </ul>
            </CardContent>
          </Card>

          <Card className='md:col-span-2 lg:col-span-3'>
            <CardHeader>
              <CardTitle>Featured Magical Tales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {featuredStories.map((story) => (
                  <div
                    key={story.title}
                    className='relative aspect-[3/4] overflow-hidden rounded-lg'
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4'>
                      <h3 className='text-lg font-semibold text-white'>
                        {story.title}
                      </h3>
                      <p className='text-sm text-gray-200'>
                        {story.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const featuredStories = [
  {
    title: 'The Friendly Ants',
    description: '18 Pages of Fun',
    image: 'https://placehold.co/300x400/?cartoon,ants',
  },
  {
    title: 'Brave Little Mouse',
    description: '16 Pages of Adventure',
    image: 'https://placehold.co/300x400/?cartoon,mouse',
  },
  {
    title: 'The Magic Lake',
    description: '15 Pages of Wonder',
    image: 'https://placehold.co/300x400/?cartoon,lake',
  },
  {
    title: 'The Golden Cucumber',
    description: '14 Pages of Magic',
    image: 'https://placehold.co/300x400/?cartoon,vegetable',
  },
];
