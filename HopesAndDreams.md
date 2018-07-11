# Hopes and Dreams
*here lies*
##### What I had originally intended for this application.

Ensures not only that Peter and I are on the same page, but also that I know
what I want specifically and can work on that idea.

## Overview
The intention of this app is not to be a replacement of a character sheet, but
instead more of a companion. While some modifications could easily be made to
turn it into a full-on replacement, but I don't know that that's what I want to
do with it, as it would require more in-depth linking to a single format.

What I would like is an application that gives players reminders about stats
and bonuses they get while not being intrusive about it.

The idea this app was born from was that we needed reminders of the stat bonuses
and abilities we needed, not that we needed or wanted to track them completely
on a device.

### Game-agnostic
The biggest part of this project I would like to maintain is to not link it to a
specific game. That means leaving all types, stats, etc... to the user. The way
I intended for this to happen was with global types defined by the user.

This could come about with the user defining the damage types fire, ice, and
necrotic in the global damage types section. later, the user goes to input a
weapon, the damage types could automatically populate a drop down menu. These
could be extended to the user's weaknesses/resistances, magic types, and
whatever else uses a type.

### Unobtrusive
With this being game-agnostic, I don't want to put any limits on the user, such
as item or carry weight limits, as this should be left to the user in case of
extraordinary circumstance like growing an extra arm or multiple heads or
something.

### Reference
I would like for all important and highly-used data to be easily accessible on
the 'dashboard' of the app, if possible. What exactly gets classified as highly
used or important may be too much of a fight but I think it would be useful to
at least put combat stats on the dashboard for at-a-glance access.

## Implementation
*uh oh*
### Why electron?
The biggest reason for the electron pick was originally because I hate the look
of java's default interfaces so much that I'm willing to learn a new language
to avoid them. Electron and node.js also give us the ability to change to a web
based app with relative ease.

It's also a good set of languages to learn.

The problem we are going to run into using electron is trying to keep the same
'player' object across multiple pages might become difficult, but it can be
done.

### File structure
I would prefer that the file the user gets to save be in some sort of
well-defined standard, like JSON or YAML, and I think with the right set up this
approach even makes more sense than doing it another way in js.

### Pages
I'm not sure how the page layout would work exactly. For right now the plan is

| page        | description
|-------------|------------
| dashboard   | keeps track of data that will be accessed frequently
| combat      | keeps track of combat-based stats; resistances, bonuses, etc.
| abilities   | spells or similar abilities
| equipment   | self-explanatory
| stats       | player-noted proficiencies and statistics

The spells page is almost exactly what I wanted out of it, so all that we really
need to do is convert it to use the full character object.

We might find out that one of these pages is impossible with the setup of the
character, and we might drop it, or specialize in a certain game and just make
branches for others.

The equipment and abilities pages will pretty much be just lists, perhaps split
into equipped/carrying for equipment, and combat will likely have a list of
weapons next to a set of bonuses, so I don't intend for any of this to be crazy
in-depth with tons of calculations going on.

## Work in progress
The actual layout of the charsheet json is very basic and only exists so that
there is actual data to test with.
