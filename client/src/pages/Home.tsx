import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PromptDisplay } from "@/components/PromptDisplay";

export default function Home() {
  const qwen3Prompt = `Objective:
Create a complete, self-contained, web-based Spirograph application that digitally emulates the classic toy, with the unique capability of tracing patterns along user-defined base paths. The application must be a single HTML file with no external dependencies.

Core Functionality:

1. Base Drawing Input (The "Track"):
   - Import Image: Allow uploading PNG/JPG/SVG files to serve as the base path. This imported path will be the trajectory for the Spirograph tracing.
   - Draw Path: Provide a freehand drawing tool on the canvas to create custom base paths.
   - Base Path Visualization: The base path should be clearly displayed (e.g., dashed line, light color, lower opacity) to distinguish it from the Spirograph trace.
   - Spirograph Mechanism: The simulated fixed point of the Spirograph gears must follow the contour of the base path, generating a continuous pattern along its trajectory.

2. Spirograph Parameters & Controls:
   - Fixed Circle Radius (R): Slider (e.g., 10-300) and numerical input.
   - Moving Circle Radius (r): Slider (e.g., 10-150) and numerical input.
   - Pen Hole Distance (d): Slider (e.g., 1-100) and numerical input.
   - Rotation Speed: Slider to control the speed of the tracing animation (e.g., 0.1x to 5x).
   - Line Color: A prominent color picker.
   - Line Thickness: Slider for stroke width (e.g., 1-20px).
   - Animation Control: Start/Pause/Resume/Stop/Reset buttons for the tracing process.
   - Preview Mode: An option to show a "ghost" preview of the complete pattern without animating the tracing (non-trace visual feedback).

3. User Interface:
   - Central Canvas: A large, central HTML5 Canvas for all drawing.
   - Control Panel: A sidebar or top/bottom panel for all input controls, grouped logically.
   - Clear Functions: Separate buttons to clear only the Trace, only the Base Path, or the entire Canvas (Clear All).
   - Responsiveness: The layout must be responsive and usable on desktop and tablet.
   - Visual Feedback: Real-time updates to parameter changes (e.g., gear size/position preview if animated gears are shown, or immediate path shape preview on parameter adjustment without starting the full trace).

4. Export Functionality:
   - Export as PNG: A button to download the final canvas (base path + spirograph trace) as a high-resolution PNG (preferably 300 DPI or scalable).
   - Export as SVG: A button to download the Spirograph trace as a vector SVG file (separate, clean vector path for the spirograph curve is preferred if technically feasible, base path can be rasterized).
   - Export as GIF (Optional/Advanced): A button to export the tracing animation process as an animated GIF.

Technical Implementation Requirements:

- Primary Technology Stack: HTML, CSS, JavaScript using the HTML5 Canvas API for all rendering. The final output must be a single, valid HTML file.
- Mathematical Foundation: Implement the Hypotrochoid equations to calculate the trace points:
  x(θ) = (R - r) * cos(θ) + d * cos(((R - r) / r) * θ)
  y(θ) = (R - r) * sin(θ) - d * sin(((R - r) / r) * θ)
- Path Tracing Logic: Develop logic to sample points along the base path (imported image outline or drawn line). At each sampled point, calculate the local tangent/angle of the path. Use this angle to orient the spirograph "mechanism" (conceptually) and generate the small spirograph segment relative to the current path point and its tangent. This ensures the full trace follows the base path's shape.
- Animation & Performance: Use requestAnimationFrame for smooth animation. Optimize calculations for performance to maintain a smooth user experience. Clearly indicate when a pattern trace is in progress (e.g., disable controls, change button states).
- State Management: Handle application state (e.g., current trace, animation status, loaded image, drawn path) effectively using JavaScript variables.
- Code Quality: Write clean, well-commented, and maintainable JavaScript. Modularize functions where appropriate (e.g., drawing functions, calculation functions, UI update functions). Use descriptive variable and function names. Include comments explaining especially the path-tracing logic and the math implementation.

Final Deliverable:
Produce a complete, valid HTML file containing all necessary HTML structure, CSS styling (embedded within <style> tags), and JavaScript code (embedded within <script> tags). The file should be ready to run by simply opening it in a web browser. Prioritize correctness and core functionality, ensuring the path-following Spirograph aspect works as described, before adding advanced visual polish.`;

  const gemini2Prompt = `**Objective:** Create a feature-rich, interactive web-based Spirograph drawing application inspired by the classic toy, with the unique ability to trace patterns along a user-defined line drawing or imported image. The application must be delivered as a single, self-contained HTML file (including inline CSS and JavaScript) optimized for performance, maintainability, and user experience.

**Core Functionality:**

1. **Base Drawing Input (The "Track" for Spirograph Movement):**
   - **Import Image:** Provide a file upload mechanism for PNG, JPG, or SVG line drawings. This imported drawing will serve as the *base path* that the spirograph mechanism will traverse.
   - **Draw on Canvas:** Implement a canvas drawing tool (freehand pen/stroke with adjustable thickness and color) allowing users to draw custom base paths directly.
   - **Visibility:** The base drawing should be rendered distinctly (e.g., lower opacity, dashed line, different color) and have a toggle to show/hide it.
   - **Mechanism Movement:** The spirograph's conceptual "fixed point" or anchor must continuously follow the contour of this base drawing, generating a spirograph pattern along its trajectory.

2. **Spirograph Mechanism & Parameters:**
   - **Fixed Circle Radius (R):** Slider or numerical input for the major radius.
   - **Moving Circle Radius (r):** Slider or numerical input for the minor radius.
   - **Pen Hole Distance (d):** Slider or numerical input for the pen offset from the moving gear's center.
   - **Visual Gears:** Display animated, translucent representations of the fixed and moving gears that visually demonstrate their interaction and movement along the base path. Include a toggle to show/hide these visual gears.
   - **Rotation Direction:** Toggle for the moving gear's rotation direction.

3. **Drawing & Animation Controls:**
   - **Start/Pause Trace:** Button to initiate and pause the spirograph tracing along the base path.
   - **Animation Speed:** Slider to control the tracing speed, targeting smooth animation (60fps).
   - **Real-time Preview:** A ghosted, static preview of the full spirograph pattern should be visible immediately upon parameter changes, *before* tracing begins.
   - **Trace Color:** Prominent color picker (with opacity control) for the spirograph line.
   - **Line Thickness:** Slider or numerical input for the spirograph line width.
   - **Multi-Color Layering:** Allow users to define multiple color stops or a gradient for the spirograph trace, applying colors sequentially or based on progression.

4. **Canvas Operations & Management:**
   - **Reset Spirograph Trace:** Button to clear only the generated spirograph lines, preserving the base drawing.
   - **Clear Base Drawing:** Button to clear only the imported or user-drawn base path.
   - **Clear All:** Button to wipe the entire canvas.
   - **Undo/Redo:** Functionality for drawing actions and parameter changes.
   - **Background Grid:** Toggleable background grid for precision drawing.

**User Interface (UI) & User Experience (UX):**

- **Clean & Modern Layout:** Intuitive, responsive design for desktop, tablet, and mobile, with a prominent central drawing canvas.
- **Draggable Control Panels:** Parameter and action controls should be logically grouped into resizable and draggable panels (e.g., one for base drawing, one for spirograph parameters, one for operations).
- **Parameter Presets:** Functionality to save and load user-defined spirograph parameter configurations.
- **Dark/Light Mode:** Toggle for interface theme.
- **Help Tooltips:** Concise, informative tooltips for all controls and parameters.
- **Keyboard Shortcuts:** Implement shortcuts (e.g., Spacebar for start/pause, Esc for reset).
- **Touch Support:** Ensure all controls and drawing features are responsive to touch input.

**Output & Export Capabilities:**

- **High-Resolution PNG:** Export the final canvas content (base drawing + spirograph trace) as a high-resolution PNG image (minimum 300 DPI).
- **SVG Vector Export:** Export the spirograph trace as an SVG file, maintaining vector quality.
- **Animated GIF:** Option to export the drawing animation as a GIF, with customizable duration/speed.
- **Shareable URL:** Generate a unique URL encoding the current spirograph parameters and (if possible) the base drawing, allowing users to share their creations.

**Technical Specifications (for Implementation):**

- **Web Standards:** Utilize HTML5 Canvas API for all drawing and rendering.
- **Mathematical Core:** Implement the hypotrochoid equations precisely:
  x(θ) = (R-r) * cos(θ) + d * cos(((R-r)/r) * θ)
  y(θ) = (R-r) * sin(θ) - d * sin(((R-r)/r) * θ)
  The mechanism should adapt these equations to follow the curvature and tangents of the base path dynamically.
- **Performance:** Optimize JavaScript for smooth animation (target 60 frames per second).
- **Code Quality:** Generate complete, modular, and well-commented HTML, CSS (inline in <style> tags), and JavaScript (inline in <script> tags).
- **Dependencies:** The application must function without *any* external libraries or frameworks (e.g., no React, Vue, jQuery, etc.). Pure vanilla HTML/CSS/JS only.
- **Robustness:** Include cross-browser compatibility and error handling for invalid inputs or file types.

**Additional Desirable Features (if scope allows):**

- **Symmetry Options:** Tools for mirroring or rotating the drawing.
- **Pattern Completion Detection:** Notification or stop when a pattern fully repeats.
- **Gear Combination Suggestions:** Suggest harmonious gear ratios based on current R.

**Generate the complete, production-ready HTML, CSS, and JavaScript code for this application in a single file, ensuring all features are implemented and thoroughly commented.**`;

  const deepseekPrompt = `# Spirograph Application Generator Prompt

## Primary Objective
Generate a complete, production-ready web-based spirograph drawing application that emulates the classic Spirograph toy with advanced digital capabilities.

## Core Application Requirements

### 1. **Base Drawing System**
- **Image Import**: File upload for PNG/JPG/SVG line drawings to use as tracing templates
- **Canvas Drawing Tools**: Pencil, line, shape tools with adjustable thickness for creating custom templates
- **Template Management**: Opacity control (0-100%), clear/reset functionality
- **Background Options**: Grid overlay toggle, measurement rulers

### 2. **Spirograph Engine**
- **Mathematical Foundation**: Implement hypotrochoid equations:
  x(θ) = (R-r) * cos(θ) + d * cos(((R-r)/r) * θ)
  y(θ) = (R-r) * sin(θ) - d * sin(((R-r)/r) * θ)
- **Gear System**:
  - Fixed outer ring radius (R) - major radius control
  - Moving inner gear radius (r) - minor radius control
  - Pen hole distance (d) - distance from moving gear center
  - Visual gear preview showing relationships
- **Gear Combinations**: Predefined gear sizes, custom size input, tooth count visualization

### 3. **Drawing Controls & Animation**
- **Playback Controls**: Start/Stop/Pause with real-time adjustment
- **Speed Control**: Variable animation speed (slow/medium/fast with precise slider)
- **Drawing Modes**: Continuous tracing vs. step-by-step animation
- **Direction Control**: Clockwise/counter-clockwise rotation toggle
- **Pen Simulation**: Pressure-sensitive line thickness variation

### 4. **Visualization Features**
- **Real-time Tracing**: Smooth 60fps animation with requestAnimationFrame
- **Visual Gear Display**: Animated gear movement with optional show/hide
- **Pattern Preview**: Ghost outline showing complete pattern before drawing
- **Guidelines**: Optional visual guides for precision

### 5. **Style & Customization**
- **Color System**: 
  - Primary color picker with opacity control
  - Gradient color cycling during drawing
  - Multi-color layering system
- **Line Properties**: Thickness control (1-20px), style options
- **Symmetry Options**: Rotational and reflective symmetry controls
- **Pattern Repetition**: Customizable pattern iteration counts

### 6. **Export & Output**
- **Image Export**: High-resolution PNG (300+ DPI), SVG vector format
- **Animation Export**: Customizable GIF creation with duration control
- **Project Save/Load**: Custom .spiro project file format
- **Sharing**: Shareable URLs with embedded parameters, social media integration

## Technical Specifications

### Framework & Performance
- **Technology Stack**: Pure HTML5 Canvas, vanilla JavaScript, CSS3
- **Performance**: Optimized for 60fps smooth animation, efficient redraw algorithms
- **Compatibility**: Cross-browser support (Chrome, Firefox, Safari, Edge)
- **Responsive Design**: Mobile/tablet/desktop adaptive layout

### Code Quality Requirements
- **Modular Architecture**: Clean separation of concerns, reusable components
- **Error Handling**: Comprehensive validation for invalid inputs/gear combinations
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Documentation**: Detailed code comments explaining mathematical logic and implementation

## User Interface Design

### Layout Structure
- **Main Canvas**: Central, prominent drawing area with coordinate system
- **Control Panels**: Collapsible side panels for parameters and tools
- **Tool Organization**: Logical grouping of related controls (Drawing, Gears, Style, Export)

### Interaction Design
- **Intuitive Controls**: Sliders, color pickers, toggle switches
- **Real-time Feedback**: Immediate visual updates on parameter changes
- **Preset System**: Save/load favorite gear combinations
- **Undo/Redo**: Full history management with multiple steps

### User Experience
- **Beginner-Friendly**: Guided tooltips, tutorial mode for first-time users
- **Advanced Options**: Power user controls accessible but not overwhelming
- **Dark/Light Theme**: Theme toggle with persistent preference storage
- **Touch Support**: Full mobile touch gesture compatibility

## Advanced Features
- **Pattern Analysis**: Automatic detection of pattern completion
- **Multiple Gears**: Support for simultaneous multi-gear configurations
- **Mathematical Precision**: High-precision floating-point calculations
- **Custom Gear Creation**: Tool for designing and saving custom gear shapes
- **Pattern Library**: Gallery of pre-made patterns and gear combinations

## Implementation Deliverables
Generate complete, self-contained code in a single HTML file containing:
- Fully functional spirograph drawing engine
- Responsive UI with all specified controls
- Comprehensive error handling and user feedback
- Production-ready code with no external dependencies
- Detailed inline documentation explaining mathematical concepts

This prompt combines the strongest elements from all previous versions: mathematical precision, comprehensive feature specification, user experience considerations, and technical implementation details to create an optimal blueprint for AI-assisted application generation.`;

  const finalSynthesizedPrompt = `**Objective:** Create a feature-rich, interactive web-based Spirograph drawing application inspired by the classic toy, with the unique ability to trace patterns along a user-defined line drawing or imported image. The application must be delivered as a single, self-contained HTML file (including inline CSS and JavaScript) optimized for performance, maintainability, and user experience.

**Technical Specifications:**

- **Web Standards:** Utilize HTML5 Canvas API for all drawing and rendering.
- **Mathematical Core:** Implement the hypotrochoid equations precisely:
  x(θ) = (R-r) * cos(θ) + d * cos(((R-r)/r) * θ)
  y(θ) = (R-r) * sin(θ) - d * sin(((R-r)/r) * θ)
  The mechanism must adapt these equations to follow the curvature and tangents of the base path dynamically.
- **Performance:** Optimize JavaScript for smooth animation (target 60 frames per second).
- **Code Quality:** Generate complete, modular, and well-commented HTML, CSS (inline in <style> tags), and JavaScript (inline in <script> tags).
- **Dependencies:** The application must function without *any* external libraries or frameworks (Pure vanilla HTML/CSS/JS only).

**Key Features Synthesized:**

1. **Base Path Tracing:** The spirograph's anchor must continuously follow the contour of the imported/drawn base path.
   - Import Image: Allow uploading PNG/JPG/SVG files to serve as the base path
   - Draw Path: Provide a freehand drawing tool on the canvas
   - Base Path Visualization: Clearly displayed with dashed line, light color, or lower opacity
   - Spirograph Mechanism: Fixed point must follow the contour, generating continuous pattern

2. **Spirograph Parameters & Controls:**
   - Fixed Circle Radius (R): Slider and numerical input
   - Moving Circle Radius (r): Slider and numerical input
   - Pen Hole Distance (d): Slider and numerical input
   - Rotation Speed: Slider to control animation speed
   - Line Color: Prominent color picker with opacity control
   - Line Thickness: Slider for stroke width
   - Animation Control: Start/Pause/Resume/Stop/Reset buttons
   - Preview Mode: Ghost preview of complete pattern

3. **Visual Gears:** Animated, translucent representations of the fixed and moving gears that visually demonstrate their interaction.

4. **Real-time Preview:** A ghosted, static preview of the full spirograph pattern visible immediately upon parameter changes.

5. **Comprehensive Export:**
   - High-resolution PNG (minimum 300 DPI)
   - SVG Vector Export
   - Animated GIF option
   - Shareable URL with parameters

6. **Advanced UX:**
   - Draggable control panels
   - Parameter presets (save/load configurations)
   - Dark/light mode toggle
   - Full undo/redo functionality
   - Help tooltips for all controls
   - Keyboard shortcuts (Space=start/pause, Esc=reset)
   - Touch support for mobile devices
   - Responsive layout for desktop/tablet
   - Background grid toggle
   - Multi-color layering system

7. **Canvas Operations:**
   - Reset Spirograph Trace: Clear only the generated spirograph lines
   - Clear Base Drawing: Clear only the imported or user-drawn base path
   - Clear All: Wipe the entire canvas

8. **Additional Features:**
   - Symmetry options (rotational, reflective)
   - Pattern completion detection
   - Gear combination suggestions
   - Custom gear size input
   - Background image opacity control
   - Rulers and measurement tools

**User Interface:**

- **Clean & Modern Layout:** Intuitive, responsive design with a prominent central drawing canvas
- **Control Panels:** Logically grouped, resizable panels for parameters and actions
- **Visual Feedback:** Real-time updates to parameter changes
- **Accessibility:** Cross-browser compatibility, error handling for invalid inputs

**Final Deliverable:**
Produce a complete, valid HTML file containing all necessary HTML structure, CSS styling (embedded within <style> tags), and JavaScript code (embedded within <script> tags). The file should be ready to run by simply opening it in a web browser. Prioritize correctness and core functionality, ensuring the path-following Spirograph aspect works as described, before adding advanced visual polish.`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container py-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Using LMCouncil.ai to enhance the Design Process
            </h1>
            <p className="text-lg text-muted-foreground">
              Optimizing a Spirograph Prompt with Multi-Model AI
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 max-w-6xl">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-4">
            This documentation captures a collaborative design process utilizing <a href="https://lmcouncil.ai/share/aac3895c-3a9a-4ea8-9b1b-54beb37de97f" className="text-blue-600 hover:underline font-semibold">www.lmcouncil.ai</a> where multiple large language models (LLMs) were tasked with designing, debating and creating a highly optimized prompt for a complex web application—a feature-rich, interactive spirograph drawing tool. The goal was to synthesize the best ideas from each model into a single, robust blueprint for AI-assisted code generation.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Try the most advanced AI collaboration platform today. <a href="https://lmcouncil.ai/share/aac3895c-3a9a-4ea8-9b1b-54beb37de97f" className="text-blue-600 hover:underline font-semibold">Visit LMCouncil.ai</a>
          </p>
        </section>

        {/* Main Tabs */}
        <Tabs defaultValue="prompts" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="prompts">All Prompts</TabsTrigger>
            <TabsTrigger value="ideas">Design Ideas</TabsTrigger>
            <TabsTrigger value="commentary">Commentary</TabsTrigger>
            <TabsTrigger value="synthesis">Synthesis</TabsTrigger>
          </TabsList>

          {/* Tab 1: All Prompts */}
          <TabsContent value="prompts" className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
              <Badge className="mb-4 bg-blue-600">Complete Prompts</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                All Prompt Versions
              </h2>
              <p className="text-muted-foreground">
                Below are the complete prompts designed by each model, followed by the final synthesized version that combines the best elements from all approaches. Click to expand each prompt.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="qwen3-prompt">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Badge className="bg-blue-600">Model 1</Badge>
                    <div>
                      <div className="font-semibold text-foreground">Qwen3 Coder's Spirograph Prompt</div>
                      <div className="text-sm text-muted-foreground font-normal">Technical Rigor & Mathematical Foundation</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm text-foreground whitespace-pre-wrap break-words font-mono leading-relaxed">
                    {qwen3Prompt}
                  </pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gemini-prompt">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Badge className="bg-blue-600">Model 2</Badge>
                    <div>
                      <div className="font-semibold text-foreground">Gemini 2.5 Flash's Spirograph Prompt</div>
                      <div className="text-sm text-muted-foreground font-normal">Path Tracing & User Experience</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm text-foreground whitespace-pre-wrap break-words font-mono leading-relaxed">
                    {gemini2Prompt}
                  </pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="deepseek-prompt">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Badge className="bg-blue-600">Model 3</Badge>
                    <div>
                      <div className="font-semibold text-foreground">Deepseek 3.1 Terminus's Spirograph Prompt</div>
                      <div className="text-sm text-muted-foreground font-normal">Advanced Features & Professional Design</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm text-foreground whitespace-pre-wrap break-words font-mono leading-relaxed">
                    {deepseekPrompt}
                  </pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="final-prompt">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <Badge className="bg-green-600">Final Version</Badge>
                    <div>
                      <div className="font-semibold text-foreground">Final Synthesized Spirograph Prompt</div>
                      <div className="text-sm text-muted-foreground font-normal">Optimal Combination of All Approaches</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm text-foreground whitespace-pre-wrap break-words font-mono leading-relaxed">
                    {finalSynthesizedPrompt}
                  </pre>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Tab 2: Design Ideas */}
          <TabsContent value="ideas" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Initial Design Ideas: The Models' Proposals
            </h2>
            <p className="text-muted-foreground mb-6">
              The initial request was to build a prompt for Google Studio using Gemini 3 that would generate a spirograph application capable of tracing patterns along an imported or drawn line drawing. Three models provided their comprehensive design specifications.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="qwen3">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Qwen3 Coder</Badge>
                    <span>Focus: Technical Rigor</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-foreground font-semibold">
                    Qwen3 Coder provided a prompt focused on technical completeness and mathematical foundation.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Core Features</h4>
                    <p className="text-muted-foreground">
                      Import/draw base line art, Spirograph gear system (R, r, d), drawing controls (start/stop, speed, color), and visualization (animated gears, ghost preview).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technical Detail</h4>
                    <p className="text-muted-foreground">
                      Explicitly included the hypotrochoid equations and emphasized mathematical correctness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Export</h4>
                    <p className="text-muted-foreground">
                      High-resolution PNG, SVG vector export, and an animated GIF option.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gemini">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Gemini 2.5 Flash</Badge>
                    <span>Focus: Path Tracing & UX</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-foreground font-semibold">
                    Gemini 2.5 Flash emphasized the unique requirement of using an imported or drawn line as the "track" for the spirograph mechanism.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Core Concept</h4>
                    <p className="text-muted-foreground">
                      The spirograph mechanism's anchor must follow the contour of the base drawing, generating a continuous pattern along the path's trajectory.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Controls</h4>
                    <p className="text-muted-foreground">
                      Clear separation of controls for the base drawing and the spirograph parameters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">UX</h4>
                    <p className="text-muted-foreground">
                      Clean, intuitive, and spacious layout with a prominent central canvas and clear labels.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="deepseek">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Deepseek 3.1 Terminus</Badge>
                    <span>Focus: Advanced Features</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-foreground font-semibold">
                    Deepseek 3.1 Terminus proposed a highly feature-rich application, including advanced controls often found in professional design software.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Advanced Controls</h4>
                    <p className="text-muted-foreground">
                      Layer management, pen pressure simulation, continuous vs. segmented drawing modes, symmetry options (rotational, reflective), and multiple simultaneous gears support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Export</h4>
                    <p className="text-muted-foreground">
                      Added project file saving (.spiro format) and direct printing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">UI</h4>
                    <p className="text-muted-foreground">
                      Intuitive drag-and-drop gear selection and real-time preview of the pattern before drawing.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Tab 3: Commentary */}
          <TabsContent value="commentary" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Commentary: Tool Relevance and Prompt Engineering
            </h2>
            <p className="text-muted-foreground mb-6">
              The models discussed the transferability of these detailed prompts to other AI tools, reaching a strong consensus on the principles of effective prompt engineering for code generation.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Key Takeaways on Transferability</CardTitle>
                <CardDescription>
                  Why these prompts work across multiple platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Structured Feature Lists</h4>
                  <p className="text-muted-foreground">
                    Easily parsed by any LLM into modular development tasks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Precision</h4>
                  <p className="text-muted-foreground">
                    Inclusion of exact mathematical formulas and API references (HTML5 Canvas) guides systems toward mathematically correct implementations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Platform Agnosticism</h4>
                  <p className="text-muted-foreground">
                    Focus on standard web technologies (HTML, CSS, JavaScript) ensures broad compatibility.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tool Compatibility Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Tool / Platform</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Relevance</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Rationale</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 text-foreground">OpenAI GPT-4+, Anthropic Claude 3+</td>
                        <td className="py-3 px-4"><Badge>High</Badge></td>
                        <td className="py-3 px-4 text-muted-foreground">Excels at interpreting complex, detailed specifications for full code generation.</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 text-foreground">GitHub Copilot, Cursor AI</td>
                        <td className="py-3 px-4"><Badge>High (Modular)</Badge></td>
                        <td className="py-3 px-4 text-muted-foreground">Ideal for breaking down the prompt into smaller, actionable tasks for incremental development within an IDE.</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 text-foreground">Low-Code/No-Code Platforms</td>
                        <td className="py-3 px-4"><Badge variant="secondary">Partial</Badge></td>
                        <td className="py-3 px-4 text-muted-foreground">Useful for blueprinting UI/UX components, but the complex mathematical engine may require manual coding.</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 text-foreground">Image Generation Models (Stable Diffusion)</td>
                        <td className="py-3 px-4"><Badge variant="destructive">Low</Badge></td>
                        <td className="py-3 px-4 text-muted-foreground">Not suitable, as the prompt requires deterministic programmatic logic, not generative imagery.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consensus on Prompt Engineering</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  The discussion among all models strongly confirmed a key point: <strong>these spirograph prompts are exceptionally versatile and well-suited for a broad range of AI-assisted development tools.</strong>
                </p>
                <p className="text-muted-foreground">
                  Well-crafted, highly specific, and technically detailed prompts serve as a universal language for interacting with advanced code-generation AI. They act as a comprehensive "spec sheet" that any capable AI system can leverage, whether to produce a full application, assist with modular development, or guide the construction of complex interactive components.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 4: Synthesis */}
          <TabsContent value="synthesis" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              The Synthesis Process
            </h2>
            <p className="text-muted-foreground mb-6">
              The final phase of the design process involved synthesizing the best elements from all three models' proposals into a single, highly optimized prompt.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>How the Final Prompt Was Created</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  The final synthesized prompt represents a careful combination of the strengths of each model's approach:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-foreground mb-2">From Qwen3 Coder</h4>
                    <p className="text-muted-foreground">
                      Technical rigor and mathematical precision, with explicit inclusion of hypotrochoid equations and emphasis on code quality and performance optimization.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-foreground mb-2">From Gemini 2.5 Flash</h4>
                    <p className="text-muted-foreground">
                      User experience focus, clear UI/UX requirements, and the critical concept of base path tracing with visual gears and real-time previews.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-foreground mb-2">From Deepseek 3.1 Terminus</h4>
                    <p className="text-muted-foreground">
                      Advanced features including symmetry options, pattern completion detection, multi-color layering, and professional design patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Principles of Effective Prompt Engineering</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">1. Structured Feature Lists</h4>
                  <p className="text-muted-foreground">
                    Breaking down complex requirements into clear, organized categories makes them easier for AI systems to understand and implement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">2. Technical Precision</h4>
                  <p className="text-muted-foreground">
                    Including exact mathematical formulas, API references, and performance targets provides concrete implementation guidance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">3. User-Centric Design</h4>
                  <p className="text-muted-foreground">
                    Describing UI/UX requirements, accessibility considerations, and interaction patterns ensures the final product is usable and intuitive.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">4. Platform Agnosticism</h4>
                  <p className="text-muted-foreground">
                    Focusing on standard web technologies and avoiding proprietary frameworks ensures broad compatibility across different AI tools and platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">5. Clear Scope Boundaries</h4>
                  <p className="text-muted-foreground">
                    Explicitly stating what should and should not be included (e.g., "no external libraries") prevents ambiguity and scope creep.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why This Approach Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  The synthesized prompt serves as a universal blueprint for AI-assisted code generation because it:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Combines technical depth with clear communication</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Balances feature completeness with implementation clarity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Addresses both functional and non-functional requirements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Provides concrete examples and specifications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Remains flexible enough to work across multiple AI platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <section className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            This documentation represents a collaborative exploration of prompt engineering best practices for AI-assisted software development. The insights gathered here demonstrate how structured, detailed specifications can bridge the gap between human intent and machine execution across multiple AI platforms.
          </p>
        </section>
      </main>
    </div>
  );
}
