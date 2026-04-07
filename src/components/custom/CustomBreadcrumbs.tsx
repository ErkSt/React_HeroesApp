import { Slash } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb";

interface Breadcrumb {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[];
}


export function CumstomBreadcrumbs({ currentPage, breadcrumbs }: Props) {

    // const { pathname } = useLocation();
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        {currentPage}
                    </BreadcrumbLink>
                </BreadcrumbItem> */}

                {
                    breadcrumbs?.map(crumb => (
                        <div className="flex items-center">
                            <BreadcrumbSeparator>
                                <Slash />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={crumb.to}>{crumb.label}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>
                    ))
                }

                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}