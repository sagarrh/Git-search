import { auth, clerkClient } from '@clerk/nextjs/server'
import { notFound, redirect } from 'next/navigation';
import React from 'react'
import { db } from '~/server/db';

const SyncUser = async () => {
    const { userId } = await auth();
    if(!userId){
       throw new Error('User not found');
    }
    const cleint =await clerkClient();
    const user = await cleint.users.getUser(userId);
    if(!user.emailAddresses[0]?.emailAddress){
        return notFound();
    }
    await db.user.upsert({
        where: {
            emailAddress: user.emailAddresses[0]?.emailAddress ?? ''
        },
        create: {
            id: user.id,
            emailAddress: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl,
            FirstName: user.firstName,
            LastName: user.lastName
        },
        update: { 
            FirstName: user.firstName,
            LastName: user.lastName
        }
    });
    return redirect('/dashboard');
}

export default SyncUser