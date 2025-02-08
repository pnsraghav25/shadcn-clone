import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { Button } from './ui/button'

const Cookie = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cookie Settings</CardTitle>
                <CardDescription>Manage your cookie settings here.</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <Label className='flex flex-col space-y-1 w-72' htmlFor='Necessary'>
                        <span>Strictly Necessary</span>
                        <span className='text-xs text-muted-foreground leading-snug'>These cookies are essential in order to use the website and use its features.</span>
                    </Label>
                    <Switch id='Necessary' />
                </div>
                <div className='flex justify-between'>
                    <Label className='flex flex-col space-y-1 w-72' htmlFor='Functional'>
                        <span>Functional Cookies</span>
                        <span className='text-xs text-muted-foreground leading-snug'>These cookies allow the website to provide personalized functionality.</span>
                    </Label>
                    <Switch id='Functional' />
                </div>
                <div className='flex justify-between'>
                    <Label className='flex flex-col space-y-1 w-72' htmlFor='Performance'>
                        <span>Performance Cookies</span>
                        <span className='text-xs text-muted-foreground leading-snug'>These cookies help to improve the performance of the website.</span>
                    </Label>
                    <Switch id='Performance' />
                </div>
            </CardContent>
            <CardFooter>
                <Button variant={'outline'} className='w-full'>Save Preferences</Button>
            </CardFooter>
        </Card>
    )
}

export default Cookie