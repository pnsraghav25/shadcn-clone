import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Comboselect from './Comboselect'

const Teammembers = () => {
    return (
        <Card className='h-fit'>
            <CardHeader>
                <CardTitle className='font-semibold'>Team Members</CardTitle>
                <CardDescription className='text-muted-foreground text-sm'>Invite your team members to collaborate.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center justify-between">
                    <div className='flex items-center gap-4'>
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className='text-sm font-semibold'>Sofia Davis</p>
                            <p className='text-muted-foreground'>m@example.com</p>
                        </div>
                    </div>
                    <Comboselect defaultValue='Owner'/>
                </div>
                <div className="flex flex-row gap-4 items-center justify-between">
                    <div className='flex items-center gap-4'>
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className='text-sm font-semibold'>Jackson Lee</p>
                            <p className='text-muted-foreground'>m@example.com</p>
                        </div>
                    </div>
                    <Comboselect defaultValue='Member'/>
                </div>
                <div className="flex flex-row gap-4 items-center justify-between">
                    <div className='flex items-center gap-4'>
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src="https://ui.shadcn.com/avatars/03.png" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className='text-sm font-semibold'>Isabella Nguyen</p>
                            <p className='text-muted-foreground'>m@example.com</p>
                        </div>
                    </div>
                    <Comboselect defaultValue='Member'/>
                </div>
            </CardContent>
        </Card>
    )
}

export default Teammembers