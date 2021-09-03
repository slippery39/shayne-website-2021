**Overview**

For this project I want to learn more about visual effects in games. This means learning about technologies like shaders, particle systems and animation systems. I always wanted to create a project using the Unity game engine as it has been a couple of years since I last did so.

I want a simple game that I could work on, so I could focus more on the VFX than the actual game and systems logic. For this I decided to make a clone of Lumines which is a puzzle game with a very light rhythm based elements - [https://en.wikipedia.org/wiki/Lumines](https://en.wikipedia.org/wiki/Lumines).

I remember playing Lumines a lot when I was a teenager on my PSP so I figured why not try to re-create it.

**Scope**

The game will clone all of the Lumines core gameplay as well as the main UI elements as shown in the image below. I will try to implement at least 3 different &quot;stages&quot; which will each have different visual elements for the blocks and a different song that plays.

The main components of core gameplay include the blocks, the grid, and the timeline which deletes the blocks.

The main components of the UI include everything in the image below.

<img src='/article-images/lumines-clone/lumines-screenshot-actual.jpg' style='max-width:100%'/>

**Time Estimations**

My original estimate for this project was 2 months. Because my original estimates are almost always wrong due to unforeseen stuff that seems to always come up, I added an extra month for padding. So 3 months total.

**Month 1 Development Notes**

**Core Gameplay**

I had the core gameplay up and running after just a few sessions with only a few missing features and minor bugs that needed to be worked out.

I found it tough to find out the more specific details of how the game should work, like how the block deletion actually works. There actually isn&#39;t too much information on the internet for the specific details of the rules of this game. For these more specific things I watched some people&#39;s gameplay on youtube and took some notes on how things played out.

After the first month, the core gameplay is more or less ready. This is great as it will allow me to really focus on the visual elements in month two.

**Shaders**

I found really good shader tutorials on Youtube from Freya Holmer. [https://www.youtube.com/watch?v=kfM-yu0iQBk&amp;list=PLImQaTpSAdsCnJon-Eir92SZMl7tPBS4Z](https://www.youtube.com/watch?v=kfM-yu0iQBk&list=PLImQaTpSAdsCnJon-Eir92SZMl7tPBS4Z)

The videos are long but I found it to be extremely helpful for someone coming into shaders with no previous experience.

I also found a great website called The Book Of Shaders ([https://thebookofshaders.com/](https://thebookofshaders.com/)) which has interactive tutorials and assignments to help with learning.

These two resources have kept me really busy so far and I feel like I am learning a lot from them.

One thing that surprised me when I was learning shaders this month was how much math is involved. At its most basic form a shader is setup as a pure function where you only have access to an X and Y coordinate that represents a pixel and you have to return a color from based on this coordinate. Its a very different way of thinking than I am used to and it has been difficult to wrap my head around so far.

Even with my very basic beginner knowledge of shaders I was still able to make a couple cool things.

- A grid that takes in an image and applies the colors from the texture to the grid lines
- A &quot;flashing light&quot; effect which pulses in and out

**The Conductor**

I scoured the internet for resources on keeping things in sync to the music. I came across this gem here which was a really good resource:

[**https://www.gamasutra.com/blogs/GrahamTattersall/20190515/342454/Coding_to_the_Beat\_\_Under_the_Hood_of_a_Rhythm_Game_in_Unity.php**](https://www.gamasutra.com/blogs/GrahamTattersall/20190515/342454/Coding_to_the_Beat__Under_the_Hood_of_a_Rhythm_Game_in_Unity.php)

The conductor&#39;s goal is to keep everything in the game in sync with the music. So it would handle things like figuring out the BPM (beats per minute) and BPS (beats per second), current beat and current time in the song among others.

Originally wanted to dynamically find the BPM of whatever audio track was playing and use that. After a bit of research I realized this was not a trivial problem to solve so I scrapped that idea.

Because of this I tried to look if there were ways to find the BPM online and I would just hard code it for each piece of music I end up having in the game.

For the particular test song I was using, sites online would say 123 BPM or 124 BPM, but when testing it out in the game it felt like it was slightly off. It would start ok and then slowly move more and more out of sync as the music was playing. I ended up finding a BPM counter software from [https://www.abyssmedia.com/bpmcounter/](https://www.abyssmedia.com/bpmcounter/) which ended up showing me that the BPM was actually 123.97. A test through of the whole song showed that nothing seemed off, so I will be using this software to calculate the BPM&#39;s going forward.

**The Mascot**

I put in a temporary mascot that exists in the bottom left corner of the UI. It was pretty simple to setup. just put some spheres on a cube to make it look somewhat like a face and had it rotate and scale based on what the current beat from the conductor is.

<img src='/article-images/lumines-clone/lumines-screenshot-custom.png' style='max-width:100%'/>

**Overall**

The first month went great! Still have a lot to learn about shaders, which I will continue to do so in month two. For the second month I will be focusing on creating the remaining elements of the UI and seeing what cool effects I can add in to spice it up.

I am tracking my time for this project, and for this month had 13 work sessions with 32 hours total.

Here is a link to a video which shows how the gameplay looks so far : [https://www.youtube.com/watch?v=HkSUHwVmwyU](https://www.youtube.com/watch?v=HkSUHwVmwyU)
