import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Comboselect from './Comboselect'

const Share = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Share this document</CardTitle>
                <CardDescription>Anyone with the link Can view this document.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-row gap-2'>
                    <Input value={'http://example.com/link/to/document'} readOnly={true} className='ml-2' />
                    <Button variant={'default'}>Copy Link</Button>
                </div>
                <Separator className='my-4' />
                <div className='flex flex-col gap-4'>
                    <p className='font-semibold text-sm'>People with access</p>
                    <div className="flex flex-col gap-4">
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
                            <div>
                                <Select defaultValue='Can view'>
                                    <SelectTrigger className='w-32'>
                                        <SelectValue defaultValue={'Billing'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Can view">Can view</SelectItem>
                                            <SelectItem value="Can edit">Can edit</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
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
                            <div>
                                <Select defaultValue='Can view'>
                                    <SelectTrigger className='w-32'>
                                        <SelectValue defaultValue={'Billing'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Can view">Can view</SelectItem>
                                            <SelectItem value="Can edit">Can edit</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
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
                            <div>
                                <Select defaultValue='Can view'>
                                    <SelectTrigger className='w-32'>
                                        <SelectValue defaultValue={'Billing'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Can view">Can view</SelectItem>
                                            <SelectItem value="Can edit">Can edit</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Share