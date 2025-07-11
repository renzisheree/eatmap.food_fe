import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { device } from "@/styles/media";
import { Container } from "@/styles/common";

export interface IBreadcrumbItem {
  name: string;
  link?: string;
}

interface IBreadcrumb {
  links: IBreadcrumbItem[];
}

const Breadcrumb = ({ links }: IBreadcrumb) => {
  const { pathname, query } = useRouter();

  return (
    <BreadcrumbStyled className="breadcrumb">
      <Container>
        {links.map((a, idx) => (
          <React.Fragment key={a.name}>
            {pathname.startsWith("/ivr") ? (
              <Link href={{ pathname: a.link || "", query: query }}>
                {a.name}
              </Link>
            ) : (
              <Link href={a.link || ""}>{a.name}</Link>
            )}

            {idx < links.length - 1 && <span> {">"} </span>}
          </React.Fragment>
        ))}
      </Container>
    </BreadcrumbStyled>
  );
};
const BreadcrumbStyled = styled.div`
  background: #ea580c;
  min-height: 146px;
  padding-top: 100px;

  @media ${device.mobile} {
    min-height: 106px;
    padding-top: 70px;
    padding-left: 0px;
    padding-right: 16px;
    padding-bottom: 16px;
  }

  span,
  a {
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    @media ${device.mobile} {
      font-size: 14px;
    }

    color: #ffffff;
  }
`;

export default Breadcrumb;
