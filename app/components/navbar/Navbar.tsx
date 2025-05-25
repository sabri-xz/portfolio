"use client";

import React, { useState } from "react";
import { CollapsibleNavbar } from "./CollapsibleNavbar";

export const Navbar: React.FC<{}> = () => {const [isOpen, setIsOpen] = useState(false);

    return (
        <CollapsibleNavbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    );
};
