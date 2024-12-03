## Live Demo: https://accessible-form-react.netlify.app/

## Why Do We Need Accessible Forms?
* **Forms are a critical part of frontend interaction**: In modern web pages, forms are everywhere. From login and signup to shopping and payment, forms are the primary means through which users interact with websites. This means that the usability of forms directly affects user experience and satisfaction. For web search ranking (SEO), accessibility is also a key indicator.
* **Accessibility is for everyone**: We often assume that accessibility design is only for a small number of people with disabilities. However, there are times in life when we all experience inconvenience, such as having a broken hand, temporarily losing vision after surgery, and so on. Additionally, some accessibility designs, like color contrast and font size, can benefit general users as well. Therefore, accessibility is not just for "people with disabilities."

## Basic Concepts of Accessible Forms
In frontend applications, form interactions can range from very simple to very complex. From the most basic contact forms to multi-page forms with various fields, it's impossible to cover everything in one go. However, we can explore the key aspects that make a form accessible from the following three perspectives:

* **Semantic Structure, Labels, and Instructions**: [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html) is the most basic and quickest way to enhance the accessibility experience. In forms, we can use the attributes of different elements and ARIA labels to correctly associate fields with their descriptions.
* **Keyboard Navigation**: For users who primarily navigate with a keyboard, the keyboard is like their "mouse." Therefore, providing correct and smooth keyboard navigation for form elements is a crucial step in creating accessible forms.
* **Form Validation and Error Messages**: Errors are inevitable when filling out forms. Proper validation and error messages help users quickly correct their input and complete the form. Therefore, when implementing forms, consider whether validation and messages can be correctly received by assistive technologies.

## React Example
[This exercise](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj) on Frontend Mentor is excellent for practicing basic accessible forms. Therefore, I use this design for demonstrating an accessible form. If you're interested, you can also download the design from the website and try implementing it yourself.

![image](https://github.com/KellyCHI22/accessible-form-react/assets/107483512/d9e059ba-b25d-46af-af2a-5bae5b600289)

It is recommended to first try using the live demo with a **keyboard** or **screen reader**, and observe the information in the accessibility panel of DevTools. Then, check out the source code in this repo. Here are some questions to think about:

1. What semantic HTML elements are used in the markup? How does the screen reader read these elements?
2. What ARIA labels are used in the markup? What are their functions? What is the resulting effect?
3. Can all elements in the form be operated using a keyboard? (Tab, Shift+Tab, Space, Enter, Arrow Keys, etc.)
4. When form elements receive focus, do they have a clearly visible focus style?
5. When errors occur, are the erroneous fields and error messages correctly conveyed? How is this achieved?
6. After successfully submitting the form, is the success message correctly conveyed? How is this achieved?

In addition to using semantic HTML tags, this example also utilizes two common libraries, [react-hook-form](https://react-hook-form.com/) and [zod](https://zod.dev/), to handle form validation. React-hook-form provides functionality for moving focus to the error field after validation and for real-time validation, while zod simplifies the process of setting up schemas and error messages.

## Additional Resources and References
* [Kateryna Porshnieva - Building Accessible Forms in React](https://www.youtube.com/watch?v=gxwJCF8dqh8)
* [WCAG Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
* [Is Placeholder Text Essential for Form Accessibility?](https://www.boia.org/blog/is-placeholder-text-essential-for-form-accessibility)
