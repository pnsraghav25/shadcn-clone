import React from 'react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
const Report = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Report an issue</CardTitle>
                <CardDescription>What area are you having problems with?</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-6'>
                <div className='flex flex-row gap-4'>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <Label>Area</Label>
                        <Select defaultValue='Billing'>
                            <SelectTrigger>
                                <SelectValue defaultValue={'Billing'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Team">Team</SelectItem>
                                    <SelectItem value="Billing">Billing</SelectItem>
                                    <SelectItem value="Account">Account</SelectItem>
                                    <SelectItem value="Deployments">Deployments</SelectItem>
                                    <SelectItem value="Support">Support</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <Label>Security Level</Label>
                        <Select defaultValue='Severity 2'>
                            <SelectTrigger>
                                <SelectValue defaultValue={'Billing'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Severity 1">Severity 1(Lowest)</SelectItem>
                                    <SelectItem value="Severity 2">Severity 2</SelectItem>
                                    <SelectItem value="Severity 3">Severity 3</SelectItem>
                                    <SelectItem value="Severity 4">Severity 4(Highest)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label>Subject</Label>
                    <Input placeholder='I need help with...'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label>Description</Label>
                    <Textarea placeholder='Please include all information relevant to your issue.'/>
                </div>
                <div className='flex flex-row justify-between'>
                    <Button size={'sm'} variant={'ghost'}>Cancel</Button>
                    <Button size={'sm'} variant={'default'}>Submit</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Report