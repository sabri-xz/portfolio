import React from 'react';
import { PixelPanel } from '../components';

export default async function Home() { 
    const grid1 = [[ 0, 1, 0, 1, 0 ],
                 [ 1, 0, 1, 0, 1 ],
                 [ 0, 1, 0, 1, 0 ],
                 [ 1, 0, 1, 0, 1 ],
                 [ 0, 1, 0, 1, 0 ]];
    const grid2 = [[ 1, 0, 1, 0, 1 ],
                 [ 0, 1, 0, 1, 0 ],
                 [ 1, 0, 1, 0, 1 ],
                 [ 0, 1, 0, 1, 0 ],
                 [ 0, 1, 0, 1, 0 ]];
  
    return (
        <div className='page-container flex-col items-center'>
            <PixelPanel gridFrames={[grid1, grid2]} frameInterval={3000} />
        </div>
    );
  }