"use client"

import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { z } from "zod"
import { jobListingSchema } from "../actions/schema"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"



export const JobListingForm = () => {
    const form = useForm({
        resolver: zodResolver(jobListingSchema),
        defaultValues: {
            title: "",
            description: "",
            experienceLevel: "junior",
            type: "full-time",
            locationRequirment: "on-site",
            wage: null,
            wageInterval: "yearly",
            provinceAbbreviation: null,
            city: null,
        }
    })

    const onSubmit = (data: z.infer<typeof jobListingSchema>) => {
        console.log(data)
    }
   
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 @container">
                <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-4 gap-y-6 items-start">
                    <FormField control={form.control} name="title" render={({field}) => (
                        <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField control={form.control} name="wage" render={({field}) => (
                        <FormItem>
                            <FormLabel>Wage</FormLabel>
                            <FormControl>
                                <Input {...field} type="number" value={field.value ?? ""} className="rounded-r-none" onChange={e => 
                                    field.onChange(isNaN(e.target.valueAsNumber) ? undefined: e.target.valueAsNumber)}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
            </form>
        </Form>
    )
}