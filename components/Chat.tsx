import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Plus, Send } from 'lucide-react'
import { Input } from './ui/input'

const Chat = () => {
    const [text, settext] = useState('')
    const [messages, setMessages]: any = useState([{ id: 1, type: "recieved", message: "Hi, how can I help you today?" },{ id: 2, type: "sent", message: "Hey, I'm having trouble with my account." },{ id: 3, type: "recieved", message: "What seems to be the problem?"},{ id: 4, type: "sent", message: "I can't log in." }])
    const [id, setid] = useState(5)
    let handlesend = (e:any) => {
        e.preventDefault()
        setMessages([...messages, { id: id, type: "sent", message: `${text}` }])
        setid(id + 1)
        settext('')
    }

    return (
        <Card>
            <CardHeader>
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
                    <Button variant={'outline'} size={'icon'} className='rounded-full'><Plus /></Button>
                </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {messages.map((e: any) => {
                    return (
                        <p key={e.id} className={`bg-accent px-4 py-2 rounded-md text-sm w-fit max-w-64 ${(e.type == 'sent') ? 'self-end bg-primary text-background': 'self-start'}`}>{e.message}</p>
                    )
                })}
            </CardContent>
            <CardFooter>
                <form onSubmit={(e) => handlesend(e)} className='w-full'>
                    <div className="flex w-full items-center space-x-2 justify-between">
                        <Input type="text" placeholder="Type your message..." value={text} onChange={(e) => settext(e.target.value)} />
                        <Button type='submit' variant={'default'} size={'sm'} disabled={text.trim() === ''} className='items-center'><Send /></Button>
                    </div>
                </form>
            </CardFooter>
        </Card>
    )
}

export default Chat