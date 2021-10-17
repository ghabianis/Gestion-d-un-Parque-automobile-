(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/execution/tasks/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaskDependencies = exports.DtsProcessing = void 0;
    /**
     * The options for processing Typescript typings (.d.ts) files.
     */
    var DtsProcessing;
    (function (DtsProcessing) {
        /**
         * Yes, process the typings for this entry point as part of the task.
         */
        DtsProcessing[DtsProcessing["Yes"] = 0] = "Yes";
        /**
         * No, do not process the typings as part of this task - they must have already been processed by
         * another task or previous ngcc process.
         */
        DtsProcessing[DtsProcessing["No"] = 1] = "No";
        /**
         * Only process the typings for this entry-point; do not render any JavaScript files for the
         * `formatProperty` of this task.
         */
        DtsProcessing[DtsProcessing["Only"] = 2] = "Only";
    })(DtsProcessing = exports.DtsProcessing || (exports.DtsProcessing = {}));
    exports.TaskDependencies = Map;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2V4ZWN1dGlvbi90YXNrcy9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBd0NBOztPQUVHO0lBQ0gsSUFBWSxhQWVYO0lBZkQsV0FBWSxhQUFhO1FBQ3ZCOztXQUVHO1FBQ0gsK0NBQUcsQ0FBQTtRQUNIOzs7V0FHRztRQUNILDZDQUFFLENBQUE7UUFDRjs7O1dBR0c7UUFDSCxpREFBSSxDQUFBO0lBQ04sQ0FBQyxFQWZXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBZXhCO0lBcUJZLFFBQUEsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0VudHJ5UG9pbnQsIEVudHJ5UG9pbnRKc29uUHJvcGVydHksIEpzb25PYmplY3R9IGZyb20gJy4uLy4uL3BhY2thZ2VzL2VudHJ5X3BvaW50JztcbmltcG9ydCB7UGFydGlhbGx5T3JkZXJlZExpc3R9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdW5pdCBvZiB3b3JrIHRvIGJlIHVuZGVydGFrZW4gYnkgYW4gYEV4ZWN1dG9yYC5cbiAqXG4gKiBBIHRhc2sgY29uc2lzdHMgb2YgcHJvY2Vzc2luZyBhIHNwZWNpZmljIGZvcm1hdCBwcm9wZXJ0eSBvZiBhbiBlbnRyeS1wb2ludC5cbiAqIFRoaXMgbWF5IG9yIG1heSBub3QgYWxzbyBpbmNsdWRlIHByb2Nlc3NpbmcgdGhlIHR5cGluZ3MgZm9yIHRoYXQgZW50cnktcG9pbnQsIHdoaWNoIG9ubHkgbmVlZHMgdG9cbiAqIGhhcHBlbiBvbmNlIGFjcm9zcyBhbGwgdGhlIGZvcm1hdHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFzayBleHRlbmRzIEpzb25PYmplY3Qge1xuICAvKiogVGhlIGBFbnRyeVBvaW50YCB3aGljaCBuZWVkcyB0byBiZSBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgdGFzay4gKi9cbiAgZW50cnlQb2ludDogRW50cnlQb2ludDtcblxuICAvKipcbiAgICogVGhlIGBwYWNrYWdlLmpzb25gIGZvcm1hdCBwcm9wZXJ0eSB0byBwcm9jZXNzIChpLmUuIHRoZSBwcm9wZXJ0eSB3aGljaCBwb2ludHMgdG8gdGhlIGZpbGUgdGhhdFxuICAgKiBpcyB0aGUgcHJvZ3JhbSBlbnRyeS1wb2ludCkuXG4gICAqL1xuICBmb3JtYXRQcm9wZXJ0eTogRW50cnlQb2ludEpzb25Qcm9wZXJ0eTtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgYWxsIGZvcm1hdCBwcm9wZXJ0aWVzIChpbmNsdWRpbmcgYHRhc2suZm9ybWF0UHJvcGVydHlgKSB0aGF0IHNob3VsZCBiZSBtYXJrZWQgYXNcbiAgICogcHJvY2Vzc2VkIG9uY2UgdGhlIHRhc2sgaGFzIGJlZW4gY29tcGxldGVkLCBiZWNhdXNlIHRoZXkgcG9pbnQgdG8gdGhlIGZvcm1hdC1wYXRoIHRoYXQgd2lsbCBiZVxuICAgKiBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgdGFzay5cbiAgICovXG4gIGZvcm1hdFByb3BlcnRpZXNUb01hcmtBc1Byb2Nlc3NlZDogRW50cnlQb2ludEpzb25Qcm9wZXJ0eVtdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHByb2Nlc3MgdHlwaW5ncyBmb3IgdGhpcyBlbnRyeS1wb2ludCBhcyBwYXJ0IG9mIHRoZSB0YXNrLlxuICAgKi9cbiAgcHJvY2Vzc0R0czogRHRzUHJvY2Vzc2luZztcbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9ucyBmb3IgcHJvY2Vzc2luZyBUeXBlc2NyaXB0IHR5cGluZ3MgKC5kLnRzKSBmaWxlcy5cbiAqL1xuZXhwb3J0IGVudW0gRHRzUHJvY2Vzc2luZyB7XG4gIC8qKlxuICAgKiBZZXMsIHByb2Nlc3MgdGhlIHR5cGluZ3MgZm9yIHRoaXMgZW50cnkgcG9pbnQgYXMgcGFydCBvZiB0aGUgdGFzay5cbiAgICovXG4gIFllcyxcbiAgLyoqXG4gICAqIE5vLCBkbyBub3QgcHJvY2VzcyB0aGUgdHlwaW5ncyBhcyBwYXJ0IG9mIHRoaXMgdGFzayAtIHRoZXkgbXVzdCBoYXZlIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgYnlcbiAgICogYW5vdGhlciB0YXNrIG9yIHByZXZpb3VzIG5nY2MgcHJvY2Vzcy5cbiAgICovXG4gIE5vLFxuICAvKipcbiAgICogT25seSBwcm9jZXNzIHRoZSB0eXBpbmdzIGZvciB0aGlzIGVudHJ5LXBvaW50OyBkbyBub3QgcmVuZGVyIGFueSBKYXZhU2NyaXB0IGZpbGVzIGZvciB0aGVcbiAgICogYGZvcm1hdFByb3BlcnR5YCBvZiB0aGlzIHRhc2suXG4gICAqL1xuICBPbmx5LFxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwYXJ0aWFsbHkgb3JkZXJlZCBsaXN0IG9mIHRhc2tzLlxuICpcbiAqIFRoZSBvcmRlcmluZy9wcmVjZWRlbmNlIG9mIHRhc2tzIGlzIGRldGVybWluZWQgYnkgdGhlIGludGVyLWRlcGVuZGVuY2llcyBiZXR3ZWVuIHRoZWlyIGFzc29jaWF0ZWRcbiAqIGVudHJ5LXBvaW50cy4gU3BlY2lmaWNhbGx5LCB0aGUgdGFza3MnIG9yZGVyL3ByZWNlZGVuY2UgaXMgc3VjaCB0aGF0IHRhc2tzIGFzc29jaWF0ZWQgdG9cbiAqIGRlcGVuZGVudCBlbnRyeS1wb2ludHMgYWx3YXlzIGNvbWUgYWZ0ZXIgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoZWlyIGRlcGVuZGVuY2llcy5cbiAqXG4gKiBBcyByZXN1bHQgb2YgdGhpcyBvcmRlcmluZywgaXQgaXMgZ3VhcmFudGVlZCB0aGF0IC0gYnkgcHJvY2Vzc2luZyB0YXNrcyBpbiB0aGUgb3JkZXIgaW4gd2hpY2hcbiAqIHRoZXkgYXBwZWFyIGluIHRoZSBsaXN0IC0gYSB0YXNrJ3MgZGVwZW5kZW5jaWVzIHdpbGwgYWx3YXlzIGhhdmUgYmVlbiBwcm9jZXNzZWQgYmVmb3JlIHByb2Nlc3NpbmdcbiAqIHRoZSB0YXNrIGl0c2VsZi5cbiAqXG4gKiBTZWUgYERlcGVuZGVuY3lSZXNvbHZlciNzb3J0RW50cnlQb2ludHNCeURlcGVuZGVuY3koKWAuXG4gKi9cbmV4cG9ydCB0eXBlIFBhcnRpYWxseU9yZGVyZWRUYXNrcyA9IFBhcnRpYWxseU9yZGVyZWRMaXN0PFRhc2s+O1xuXG4vKipcbiAqIEEgbWFwcGluZyBmcm9tIFRhc2tzIHRvIHRoZSBUYXNrcyB0aGF0IGRlcGVuZCB1cG9uIHRoZW0gKGRlcGVuZGVudHMpLlxuICovXG5leHBvcnQgdHlwZSBUYXNrRGVwZW5kZW5jaWVzID0gTWFwPFRhc2ssIFNldDxUYXNrPj47XG5leHBvcnQgY29uc3QgVGFza0RlcGVuZGVuY2llcyA9IE1hcDtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFRhc2tDb21wbGV0ZWRDYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgQ3JlYXRlVGFza0NvbXBsZXRlZENhbGxiYWNrID0gKHRhc2tRdWV1ZTogVGFza1F1ZXVlKSA9PiBUYXNrQ29tcGxldGVkQ2FsbGJhY2s7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBhIHRhc2sgaGFzIGJlZW4gcHJvY2Vzc2VkLlxuICovXG5leHBvcnQgdHlwZSBUYXNrQ29tcGxldGVkQ2FsbGJhY2sgPVxuICAgICh0YXNrOiBUYXNrLCBvdXRjb21lOiBUYXNrUHJvY2Vzc2luZ091dGNvbWUsIG1lc3NhZ2U6IHN0cmluZ3xudWxsKSA9PiB2b2lkO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIG91dGNvbWUgb2YgcHJvY2Vzc2luZyBhIGBUYXNrYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gVGFza1Byb2Nlc3NpbmdPdXRjb21lIHtcbiAgLyoqIFN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQgdGhlIHRhcmdldCBmb3JtYXQgcHJvcGVydHkuICovXG4gIFByb2Nlc3NlZCxcbiAgLyoqIEZhaWxlZCB0byBwcm9jZXNzIHRoZSB0YXJnZXQgZm9ybWF0LiAqL1xuICBGYWlsZWQsXG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIGxpc3Qgb2YgdGFza3MgYW5kIHByb3ZpZGluZyB1dGlsaXR5IG1ldGhvZHMgZm9yIGdldHRpbmcgdGhlIG5leHQgdGFzayBvZlxuICogaW50ZXJlc3QgYW5kIGRldGVybWluaW5nIHdoZW4gYWxsIHRhc2tzIGhhdmUgYmVlbiBjb21wbGV0ZWQuXG4gKlxuICogKFRoaXMgYWxsb3dzIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgdG8gaW1wb3NlIGRpZmZlcmVudCBjb25zdHJhaW50cyBvbiB3aGVuIGEgdGFzaydzXG4gKiBwcm9jZXNzaW5nIGNhbiBzdGFydC4pXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFza1F1ZXVlIHtcbiAgLyoqIFdoZXRoZXIgYWxsIHRhc2tzIGhhdmUgYmVlbiBjb21wbGV0ZWQuICovXG4gIGFsbFRhc2tzQ29tcGxldGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5leHQgdGFzayB3aG9zZSBwcm9jZXNzaW5nIGNhbiBzdGFydCAoaWYgYW55KS5cbiAgICpcbiAgICogVGhpcyBpbXBsaWNpdGx5IG1hcmtzIHRoZSB0YXNrIGFzIGluLXByb2dyZXNzLlxuICAgKiAoVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGFsbCB0YXNrcyBoYXZlIGJlZW4gY29tcGxldGVkLilcbiAgICpcbiAgICogQHJldHVybiBUaGUgbmV4dCB0YXNrIGF2YWlsYWJsZSBmb3IgcHJvY2Vzc2luZyBvciBgbnVsbGAsIGlmIG5vIHRhc2sgY2FuIGJlIHByb2Nlc3NlZCBhdCB0aGVcbiAgICogICAgICAgICBtb21lbnQgKGluY2x1ZGluZyBpZiB0aGVyZSBhcmUgbm8gbW9yZSB1bnByb2Nlc3NlZCB0YXNrcykuXG4gICAqL1xuICBnZXROZXh0VGFzaygpOiBUYXNrfG51bGw7XG5cbiAgLyoqXG4gICAqIE1hcmsgYSB0YXNrIGFzIGNvbXBsZXRlZC5cbiAgICpcbiAgICogVGhpcyByZW1vdmVzIHRoZSB0YXNrIGZyb20gdGhlIGludGVybmFsIGxpc3Qgb2YgaW4tcHJvZ3Jlc3MgdGFza3MuXG4gICAqIChUaGlzIGluZm9ybWF0aW9uIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRhc2tzIGhhdmUgYmVlbiBjb21wbGV0ZWQuKVxuICAgKlxuICAgKiBAcGFyYW0gdGFzayBUaGUgdGFzayB0byBtYXJrIGFzIGNvbXBsZXRlZC5cbiAgICovXG4gIG1hcmtBc0NvbXBsZXRlZCh0YXNrOiBUYXNrKTogdm9pZDtcblxuICAvKipcbiAgICogTWFyayBhIHRhc2sgYXMgZmFpbGVkLlxuICAgKlxuICAgKiBEbyBub3QgcHJvY2VzcyB0aGUgdGFza3MgdGhhdCBkZXBlbmQgdXBvbiB0aGUgZ2l2ZW4gdGFzay5cbiAgICovXG4gIG1hcmtBc0ZhaWxlZCh0YXNrOiBUYXNrKTogdm9pZDtcblxuICAvKipcbiAgICogTWFyayBhIHRhc2sgYXMgbm90IHByb2Nlc3NlZCAoaS5lLiBhZGQgYW4gaW4tcHJvZ3Jlc3MgdGFzayBiYWNrIHRvIHRoZSBxdWV1ZSkuXG4gICAqXG4gICAqIFRoaXMgcmVtb3ZlcyB0aGUgdGFzayBmcm9tIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGluLXByb2dyZXNzIHRhc2tzIGFuZCBhZGRzIGl0IGJhY2sgdG8gdGhlIGxpc3RcbiAgICogb2YgcGVuZGluZyB0YXNrcy5cbiAgICpcbiAgICogQHBhcmFtIHRhc2sgVGhlIHRhc2sgdG8gbWFyayBhcyBub3QgcHJvY2Vzc2VkLlxuICAgKi9cbiAgbWFya0FzVW5wcm9jZXNzZWQodGFzazogVGFzayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGFzayBxdWV1ZSAoZm9yIGRlYnVnZ2luZyBwdXJwb3NlcykuXG4gICAqXG4gICAqIEByZXR1cm4gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRhc2sgcXVldWUuXG4gICAqL1xuICB0b1N0cmluZygpOiBzdHJpbmc7XG59XG4iXX0=