"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const roles = [
    {
        value: "viewer",
        label: "Viewer",
        desc : "Can View and Comment."
    },
    {
        value: "developer",
        label: "Developer",
        desc : "Can view, edit and comment."
    },
    {
        value: "billing",
        label: "Billing",
        desc : "Can view, comment and manage billing."
    },
    {
        value: "owner",
        label: "Owner",
        desc : "Admin-level access to all resources."
    },
]
const Comboselect = ({defaultValue} : any) => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button size={'sm'}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between text-xs"
                >
                    {value
                        ? roles.find((role) => role.value === value)?.label
                        : defaultValue}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Select Role" />
                    <CommandList>
                        <CommandEmpty>No role found.</CommandEmpty>
                        <CommandGroup>
                            {roles.map((role) => (
                                <CommandItem
                                    key={role.value}
                                    value={role.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === role.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">{role.label}</p>
                                        <p className="text-xs text-muted-foreground">{role.desc}</p>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default Comboselect