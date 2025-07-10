"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { jobListingSchema } from "../actions/schema"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select"
import { wageIntervals } from "@/drizzle/schema"
import { formatWageInterval } from "../lib/formatters"
import { ProvinceSelectItems } from "./ProvinceSelectItems"

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
                    <FormField control={form.control} name="title" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="wage" render={({ field: wageField }) => (
                        <FormItem>
                            <FormLabel>Wage</FormLabel>
                            <div className="flex">
                                <FormControl>
                                    <Input
                                        {...wageField}
                                        type="number"
                                        value={wageField.value ?? ""}
                                        onChange={e =>
                                            wageField.onChange(isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber)
                                        }
                                        className="rounded-r-none"
                                    />
                                </FormControl>
                                    <FormField control={form.control} name="wageInterval" render={({ field: intervalField }) => (
                                        <FormItem>
                                            <Select value={intervalField.value ?? ""} onValueChange={intervalField.onChange}>
                                                <FormControl>
                                                    <SelectTrigger className="rounded-l-none min-w-[100px]">
                                                        /<SelectValue />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                        {wageIntervals.map(interval => (
                                                            <SelectItem key={interval} value={interval}>
                                                        {formatWageInterval(interval)}
                                                    </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )} 
                                />
                            </div>
                            <FormDescription>Optionally, specify the wage interval</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-4 gap-y-6 items-start">
                    <div className="grid grid-cols-1 @xs:grid-cols-2 gap-x-2 gap-y-6 items-start">
                    <FormField control={form.control} name="city" render={({ field }) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input {...field} value={field.value ?? ""}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                <FormField control={form.control} name="provinceAbbreviation" render={({ field: provinceField }) => (
                    <FormItem>
                        <Select value={provinceField.value ?? ""} onValueChange={provinceField.onChange}>
                            <FormControl>
                                <SelectTrigger className="w-full">
                                    /<SelectValue />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <ProvinceSelectItems />
                            </SelectContent>
                        </Select>
                    </FormItem>
                )} />

                <FormField control={form.control} name="wage" render={({ field: wageField }) => (
                    <FormItem>
                        <FormLabel>Wage</FormLabel>
                        <div className="flex">
                            <FormControl>
                                <Input
                                    {...wageField}
                                    type="number"
                                    value={wageField.value ?? ""}
                                    onChange={e =>
                                        wageField.onChange(isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber)
                                    }
                                    className="rounded-r-none"
                                />
                            </FormControl>
                                <FormField control={form.control} name="wageInterval" render={({ field: intervalField }) => (
                                    <FormItem>
                                        <Select value={intervalField.value ?? ""} onValueChange={intervalField.onChange}>
                                            <FormControl>
                                                <SelectTrigger className="rounded-l-none min-w-[100px]">
                                                    /<SelectValue />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                    {wageIntervals.map(interval => (
                                                        <SelectItem key={interval} value={interval}>
                                                    {formatWageInterval(interval)}
                                                </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )} 
                            />
                        </div>
                        <FormDescription>Optionally, specify the wage interval</FormDescription>
                        <FormMessage />
                    </FormItem>
                )} />
            </div>
            </form>
        </Form>
    )
}