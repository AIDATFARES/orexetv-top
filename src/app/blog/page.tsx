"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Mail } from "lucide-react";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="flex-grow pt-24 pb-24 px-5 sm:px-8 max-w-[1300px] mx-auto w-full relative z-10 bg-white">
      {/* Header */}
      <header className="mb-14 text-center md:text-left">
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs tracking-wider uppercase mb-4">
          Streaming Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Latest News &amp; <span className="text-indigo-600">Streaming Guides</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          Stay updated with 4K streaming technology, player setup guides, and tips to optimize your OREXETV experience.
          Explore our <Link href="/pricing" className="font-semibold text-indigo-600 hover:underline">subscription plans</Link>, browse our <Link href="/channels" className="font-semibold text-indigo-600 hover:underline">50,000+ channel catalog</Link>, or check out our <Link href="/installation" className="font-semibold text-indigo-600 hover:underline">device setup tutorials</Link>.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-200 shadow-xs hover:border-indigo-300 hover:shadow-md">
              <div className="md:w-3/5 h-64 md:h-[400px] relative overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                  alt={`${featuredPost.title} - OREXETV Streaming Guide`}
                  title={`${featuredPost.title} | OREXETV`}
                  fetchPriority="high"
                  src={featuredPost.coverImage || ""}
                />
              </div>
              <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-max border border-indigo-200">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-2 mt-auto text-indigo-600 font-bold text-xs uppercase tracking-wider">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all duration-200 h-full">
              <div className="h-52 relative overflow-hidden shrink-0 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  alt={`${post.title} - OREXETV Guide`}
                  title={`${post.title} | OREXETV`}
                  loading="lazy"
                  src={post.coverImage || ""}
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-xs text-slate-800 rounded-full font-bold text-[10px] tracking-wider uppercase border border-slate-200">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-slate-400 text-xs font-semibold">
                  <span>{post.date}</span>
                  <span className="text-indigo-600 flex items-center gap-1 group-hover:gap-1.5 transition-all font-bold">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Card */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Subscribe to Streaming Updates</h2>
          <p className="text-slate-600 text-sm mb-6">
            Get notified of new channel bouquets, 4K sports schedules, and setup tutorials.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="border border-slate-200 bg-white rounded-full px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 w-full sm:w-80"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="btn-primary-orexe px-7 py-3 text-xs font-bold uppercase tracking-wider"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
