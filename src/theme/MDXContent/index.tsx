import React from "react";
import MDXContent from "@theme-original/MDXContent";
import Link from "@docusaurus/Link";
import Tag from "@site/src/components/Tag";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { RiDiscordFill } from "react-icons/ri";
import Gallery from "@site/src/components/Gallery";

import SocialShare from "@site/src/components/SocialShare";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLocation } from "@docusaurus/router";
import BgGradient from "@site/src/components/BgGradient";

export type PageFrontMatter = {
  id: string;
  path: string;
  title: string;
  description: string;
  logo?: string;
  thumbnail: string;
  gallery?: {
    image: string;
    alt?: string;
  }[];
  tags: {
    projectStage?: string;
    event?: string;
    winner?: number;
    technology?: string[];
  };
  links: {
    github?: string[];
    website?: string[];
    twitter?: string[];
    discord?: string[];
    demo?: string;
  };
  team?: {
    name: string;
    linkedin?: string;
    twitter?: string;
    discord?: string;
    image?: string;
  }[];
};

export default function MDXContentWrapper(props) {
  const { type } = props.children;
  const { frontMatter } = type;
  const { title, description, logo, tags, gallery, links, team } =
    frontMatter as PageFrontMatter;

  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      {/*  */}
      <BgGradient />
      <div className="flex flex-col justify-center py-12 lg:py-24">
        <div className="container max-w-4xl">
          <div className="text-center">
            {logo && (
              <p className="mb-4">
                <img
                  src={useBaseUrl(
                    `${siteConfig.customFields.projectsImagesPath}${location.pathname}${logo}`
                  )}
                  width="100"
                  alt={title}
                  className="aspect-square w-28 h-28 object-cover rounded-full"
                />
              </p>
            )}
            <h1 className="text-5xl inline-block mx-auto sm:text-6xl lg:text-7xl mb-6 text-slate-900">
              {title}
            </h1>
            <div className="text-lg lg:text-xl">{description}</div>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-10">
            <div className="flex flex-wrap gap-1 mt-auto">
              {Object.keys(tags)
                .filter((key) => key !== "technology")
                .map((key: keyof PageFrontMatter["tags"]) => {
                  if (tags[key]) {
                    return <Tag type={key} tag={tags[key]} isLink key={key} />;
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      {gallery && (
        <div className="pb-4">
          <div className="container max-w-screen-lg">
            <div>
              <Gallery images={[...(gallery || [])]} />
            </div>
          </div>
        </div>
      )}
      {/*  */}

      <div className="bg-white py-12 lg:py-24">
        <div className="container max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 flex flex-col gap-4 order-last md:order-first">
              {/*  */}
              {links && (
                <div className="p-4 md:p-6 lg:p-8 bg-slate-100 rounded-xl">
                  <h3 className="lg:text-3xl mb-4">Links</h3>
                  <div>
                    <div className="flex flex-col gap-2">
                      {links.website &&
                        links.website.map((url, i) => {
                          return (
                            <a
                              href={url}
                              className="text-slate-900 no-underline hover:no-underline flex gap-2 items-center"
                            >
                              <span className="flex items-center">
                                <BiLink className="w-6 h-6 fill-current" />
                              </span>
                              <span className="truncate">{url}</span>
                            </a>
                          );
                        })}
                      {links.github &&
                        links.github.map((url, i) => {
                          return (
                            <a
                              href={url}
                              className="text-slate-900 no-underline hover:no-underline flex gap-2 items-center"
                            >
                              <span className="flex items-center">
                                <AiFillGithub className="w-6 h-6 fill-current" />
                              </span>
                              <span className="truncate">{url}</span>
                            </a>
                          );
                        })}
                      {links.twitter &&
                        links.twitter.map((url, i) => {
                          return (
                            <a
                              href={url}
                              className="text-slate-900 no-underline hover:no-underline flex gap-2 items-center"
                            >
                              <span className="flex items-center">
                                <AiFillTwitterCircle className="w-6 h-6 fill-current" />
                              </span>
                              <span className="truncate">{url}</span>
                            </a>
                          );
                        })}
                      {links.discord &&
                        links.discord.map((url, i) => {
                          return (
                            <a
                              href={url}
                              className="text-slate-900 no-underline hover:no-underline flex gap-2 items-center"
                            >
                              <span className="flex items-center">
                                <RiDiscordFill className="w-6 h-6 fill-current" />
                              </span>
                              <span className="truncate">{url}</span>
                            </a>
                          );
                        })}
                    </div>
                  </div>
                  {links.demo && (
                    <div className="mt-6">
                      <a
                        href={links.demo}
                        rel="noreferrer"
                        target="_blank"
                        className="btn no-underline hover:no-underline py-3  hover:text-white transition-colors justify-center"
                      >
                        Give it a try
                      </a>
                    </div>
                  )}
                </div>
              )}
              {/*  */}
              {/*  */}
              {team && (
                <div className="p-4 md:p-6 lg:p-8 bg-slate-100 rounded-xl">
                  <h3 className="lg:text-3xl mb-4">Team</h3>
                  <div>
                    <div className="flex flex-col gap-2">
                      {team.map((member, i) => {
                        return (
                          <div className="flex items-center gap-4">
                            {member.image && (
                              <div className="flex-shrink-0">
                                <img
                                  src={member.image}
                                  width="100"
                                  alt={member.name}
                                  className="aspect-square w-12 h-12 object-cover rounded-full"
                                />
                              </div>
                            )}
                            <div className="flex flex-wrap gap-2 items-center">
                              <div className="font-bold">{member.name}</div>
                              {member.linkedin && (
                                <div className="flex-shrink-0">
                                  <a
                                    href={member.linkedin}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="flex hover:no-underline no-underline text-slate-900   align-middle"
                                    key={i}
                                  >
                                    <AiFillLinkedin className="w-6 h-6 fill-current" />
                                  </a>
                                </div>
                              )}
                              {member.twitter && (
                                <div className="flex-shrink-0">
                                  <a
                                    href={member.twitter}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="flex hover:no-underline no-underline text-slate-900 align-middle"
                                    key={i}
                                  >
                                    <AiFillTwitterCircle className="w-6 h-6 fill-current" />
                                  </a>
                                </div>
                              )}
                              {member.discord && (
                                <div className="flex flex-shrink-0 items-center bg-slate-700 text-white py-2 text-sm px-3 rounded-lg">
                                  <RiDiscordFill className="w-6 h-6 fill-current" />
                                  {member.discord}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {/*  */}
              {/*  */}
              {tags.technology && (
                <div className="p-4 md:p-6 lg:p-8 bg-slate-100 rounded-xl">
                  <h3 className="lg:text-3xl mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-1">
                    {tags.technology.map((tag, i) => {
                      return <Tag type="technology" tag={tag} key={i} isLink />;
                    })}
                  </div>
                </div>
              )}
              {/*  */}

              {/*  */}
              <SocialShare title={title} />
              {/*  */}
            </div>
            <div className="md:col-span-8 showcase-content">
              <MDXContent {...props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
