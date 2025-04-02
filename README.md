# Flask UI Components

A **Jinja2 UI Component System** inspired by [shadcn/ui](https://ui.shadcn.com/), built for Flask applications using:
- 🧩 **Jinja2 Macros** → for pluggable & reusable components
- 🎨 **Vanilla CSS** → no dependency on external frameworks
- ⚡ **Vanilla JS** → for optional interactivity

This project brings modern component-driven design to Flask without the complexity of heavy frontend stacks.

---

## 🎯 Purpose

The goal of this project is to provide a **scalable, pluggable, and lightweight UI component system** for Flask developers, following the same design philosophy as shadcn/ui but server-rendered using Jinja2.

Each component is designed to be:
- **Customizable** → You control the classes and attributes.
- **Composable** → Small components can be combined into larger blocks.
- **Framework-free** → Only Flask, Jinja2, CSS & JS.

---

## 📌 Components

Currently available components:

- **Button** → Variant-based, flexible button component
- **Card** → Composable card component with header, content & footer

**More components will be added gradually.**  
The goal is to cover most common UI primitives (forms, modals, tables, etc.).

---

## 🚀 Roadmap

This repository is focused initially on atomic UI components.  
Once the atomic system is stable, **blocks & layout sections** (e.g. hero sections, footers, sidebars) will be progressively added.

---

## 📄 License

MIT License