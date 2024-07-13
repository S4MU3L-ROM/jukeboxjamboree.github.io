import React from "react";
import {Accordion, AccordionItem, Image} from "@nextui-org/react";

export default function Acor(props) {
    console.log(props.title)
    return (
        <Accordion>
            <AccordionItem key="1" aria-label={props.title} title={props.title}>
                <div className="flex gap-2 items-center">
                    <Image
                        alt={props.alt}
                        src={props.root}
                        className="rounded-bl-xl rounded-tr-xl"
                    />
                    <p className="text-xl text-justify text font-light text-white max-w-2xl">
                        {props.defaultContent}
                    </p>
                </div>
            </AccordionItem>
        </Accordion>
    );
}
