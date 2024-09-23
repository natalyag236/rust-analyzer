var srcIndex = new Map(JSON.parse('[\
["base_db",["",[],["change.rs","input.rs","lib.rs"]]],\
["cfg",["",[],["cfg_expr.rs","dnf.rs","lib.rs"]]],\
["hir",["",[["semantics",[],["source_to_def.rs"]],["term_search",[],["expr.rs","tactics.rs"]]],["attrs.rs","db.rs","diagnostics.rs","display.rs","from_id.rs","has_source.rs","lib.rs","semantics.rs","source_analyzer.rs","symbols.rs","term_search.rs"]]],\
["hir_def",["",[["body",[["lower",[],["asm.rs"]]],["lower.rs","pretty.rs","scope.rs"]],["data",[],["adt.rs"]],["dyn_map",[],["keys.rs"]],["hir",[],["format_args.rs","type_ref.rs"]],["item_tree",[],["lower.rs","pretty.rs"]],["nameres",[],["attr_resolution.rs","collector.rs","diagnostics.rs","mod_resolution.rs","path_resolution.rs","proc_macro.rs"]],["path",[],["lower.rs"]]],["attr.rs","body.rs","builtin_type.rs","child_by_source.rs","data.rs","db.rs","dyn_map.rs","expander.rs","find_path.rs","generics.rs","hir.rs","import_map.rs","item_scope.rs","item_tree.rs","lang_item.rs","lib.rs","lower.rs","nameres.rs","path.rs","per_ns.rs","pretty.rs","resolver.rs","src.rs","visibility.rs"]]],\
["hir_expand",["",[["builtin",[],["attr_macro.rs","derive_macro.rs","fn_macro.rs","quote.rs"]]],["attrs.rs","builtin.rs","cfg_process.rs","change.rs","db.rs","declarative.rs","eager.rs","files.rs","fixup.rs","hygiene.rs","inert_attr_macro.rs","lib.rs","mod_path.rs","name.rs","prettify_macro_expansion_.rs","proc_macro.rs","span_map.rs"]]],\
["hir_ty",["",[["diagnostics",[["decl_check",[],["case_conv.rs"]],["match_check",[],["pat_analysis.rs","pat_util.rs"]]],["decl_check.rs","expr.rs","match_check.rs","unsafe_check.rs"]],["infer",[],["cast.rs","closure.rs","coerce.rs","expr.rs","mutability.rs","pat.rs","path.rs","unify.rs"]],["layout",[],["adt.rs","target.rs"]],["mir",[["eval",[["shim",[],["simd.rs"]]],["shim.rs"]],["lower",[],["as_place.rs","pattern_matching.rs"]]],["borrowck.rs","eval.rs","lower.rs","monomorphization.rs","pretty.rs"]]],["autoderef.rs","builder.rs","chalk_db.rs","chalk_ext.rs","consteval.rs","db.rs","diagnostics.rs","display.rs","generics.rs","infer.rs","inhabitedness.rs","interner.rs","lang_items.rs","layout.rs","lib.rs","lower.rs","mapping.rs","method_resolution.rs","mir.rs","object_safety.rs","primitive.rs","tls.rs","traits.rs","utils.rs"]]],\
["ide",["",[["annotations",[],["fn_references.rs"]],["doc_links",[],["intra_doc_links.rs"]],["hover",[],["render.rs"]],["inlay_hints",[],["adjustment.rs","bind_pat.rs","binding_mode.rs","chaining.rs","closing_brace.rs","closure_captures.rs","closure_ret.rs","discriminant.rs","generic_param.rs","implicit_drop.rs","implicit_static.rs","lifetime.rs","param_name.rs","range_exclusive.rs"]],["syntax_highlighting",[],["escape.rs","format.rs","highlight.rs","highlights.rs","html.rs","inject.rs","injector.rs","macro_.rs","tags.rs"]],["typing",[],["on_enter.rs"]]],["annotations.rs","call_hierarchy.rs","doc_links.rs","expand_macro.rs","extend_selection.rs","fetch_crates.rs","file_structure.rs","folding_ranges.rs","goto_declaration.rs","goto_definition.rs","goto_implementation.rs","goto_type_definition.rs","highlight_related.rs","hover.rs","inlay_hints.rs","interpret_function.rs","join_lines.rs","lib.rs","markdown_remove.rs","markup.rs","matching_brace.rs","moniker.rs","move_item.rs","navigation_target.rs","parent_module.rs","references.rs","rename.rs","runnables.rs","signature_help.rs","ssr.rs","static_index.rs","status.rs","syntax_highlighting.rs","syntax_tree.rs","test_explorer.rs","typing.rs","view_crate_graph.rs","view_hir.rs","view_item_tree.rs","view_memory_layout.rs","view_mir.rs"]]],\
["ide_assists",["",[["handlers",[],["add_braces.rs","add_explicit_type.rs","add_label_to_loop.rs","add_lifetime_to_type.rs","add_missing_impl_members.rs","add_missing_match_arms.rs","add_return_type.rs","add_turbo_fish.rs","apply_demorgan.rs","auto_import.rs","bind_unused_param.rs","bool_to_enum.rs","change_visibility.rs","convert_bool_then.rs","convert_closure_to_fn.rs","convert_comment_block.rs","convert_comment_from_or_to_doc.rs","convert_from_to_tryfrom.rs","convert_integer_literal.rs","convert_into_to_from.rs","convert_iter_for_each_to_for.rs","convert_let_else_to_match.rs","convert_match_to_let_else.rs","convert_named_struct_to_tuple_struct.rs","convert_nested_function_to_closure.rs","convert_to_guarded_return.rs","convert_tuple_return_type_to_struct.rs","convert_tuple_struct_to_named_struct.rs","convert_two_arm_bool_match_to_matches_macro.rs","convert_while_to_loop.rs","destructure_struct_binding.rs","destructure_tuple_binding.rs","desugar_doc_comment.rs","expand_glob_import.rs","explicit_enum_discriminant.rs","extract_expressions_from_format_string.rs","extract_function.rs","extract_module.rs","extract_struct_from_enum_variant.rs","extract_type_alias.rs","extract_variable.rs","fill_record_pattern_fields.rs","fix_visibility.rs","flip_binexpr.rs","flip_comma.rs","flip_trait_bound.rs","generate_constant.rs","generate_default_from_enum_variant.rs","generate_default_from_new.rs","generate_delegate_methods.rs","generate_delegate_trait.rs","generate_deref.rs","generate_derive.rs","generate_documentation_template.rs","generate_enum_is_method.rs","generate_enum_projection_method.rs","generate_enum_variant.rs","generate_from_impl_for_enum.rs","generate_function.rs","generate_getter_or_setter.rs","generate_impl.rs","generate_is_empty_from_len.rs","generate_mut_trait_impl.rs","generate_new.rs","generate_trait_from_impl.rs","inline_call.rs","inline_const_as_literal.rs","inline_local_variable.rs","inline_macro.rs","inline_type_alias.rs","into_to_qualified_from.rs","introduce_named_generic.rs","introduce_named_lifetime.rs","invert_if.rs","merge_imports.rs","merge_match_arms.rs","merge_nested_if.rs","move_bounds.rs","move_const_to_impl.rs","move_from_mod_rs.rs","move_guard.rs","move_module_to_file.rs","move_to_mod_rs.rs","normalize_import.rs","number_representation.rs","promote_local_to_const.rs","pull_assignment_up.rs","qualify_method_call.rs","qualify_path.rs","raw_string.rs","remove_dbg.rs","remove_mut.rs","remove_parentheses.rs","remove_unused_imports.rs","remove_unused_param.rs","reorder_fields.rs","reorder_impl_items.rs","replace_arith_op.rs","replace_derive_with_manual_impl.rs","replace_if_let_with_match.rs","replace_is_method_with_if_let_method.rs","replace_let_with_if_let.rs","replace_method_eager_lazy.rs","replace_named_generic_with_impl.rs","replace_qualified_name_with_use.rs","replace_string_with_char.rs","replace_try_expr_with_match.rs","replace_turbofish_with_explicit_type.rs","sort_items.rs","split_import.rs","term_search.rs","toggle_async_sugar.rs","toggle_ignore.rs","toggle_macro_delimiter.rs","unmerge_match_arm.rs","unmerge_use.rs","unnecessary_async.rs","unqualify_method_call.rs","unwrap_block.rs","unwrap_result_return_type.rs","unwrap_tuple.rs","wrap_return_type_in_result.rs","wrap_unwrap_cfg_attr.rs"]],["utils",[],["gen_trait_fn_body.rs","ref_field_expr.rs"]]],["assist_config.rs","assist_context.rs","lib.rs","utils.rs"]]],\
["ide_completion",["",[["completions",[["attribute",[],["cfg.rs","derive.rs","lint.rs","macro_use.rs","repr.rs"]],["item_list",[],["trait_impl.rs"]],["postfix",[],["format_like.rs"]]],["attribute.rs","dot.rs","env_vars.rs","expr.rs","extern_abi.rs","extern_crate.rs","field.rs","flyimport.rs","fn_param.rs","format_string.rs","item_list.rs","keyword.rs","lifetime.rs","mod_.rs","pattern.rs","postfix.rs","record.rs","snippet.rs","type.rs","use_.rs","vis.rs"]],["context",[],["analysis.rs"]],["render",[],["const_.rs","function.rs","literal.rs","macro_.rs","pattern.rs","type_alias.rs","union_literal.rs","variant.rs"]]],["completions.rs","config.rs","context.rs","item.rs","lib.rs","render.rs","snippet.rs"]]],\
["ide_db",["",[["generated",[],["lints.rs"]],["imports",[],["import_assets.rs","insert_use.rs","merge_imports.rs"]],["prime_caches",[],["topologic_sort.rs"]],["syntax_helpers",[],["format_string.rs","format_string_exprs.rs","node_ext.rs","suggest_name.rs"]]],["active_parameter.rs","apply_change.rs","assists.rs","defs.rs","documentation.rs","famous_defs.rs","helpers.rs","items_locator.rs","label.rs","lib.rs","path_transform.rs","prime_caches.rs","rename.rs","rust_doc.rs","search.rs","source_change.rs","symbol_index.rs","traits.rs","ty_filter.rs","use_trivial_constructor.rs"]]],\
["ide_diagnostics",["",[["handlers",[],["await_outside_of_async.rs","break_outside_of_loop.rs","expected_function.rs","field_shorthand.rs","inactive_code.rs","incoherent_impl.rs","incorrect_case.rs","invalid_cast.rs","invalid_derive_target.rs","json_is_not_rust.rs","macro_error.rs","malformed_derive.rs","mismatched_arg_count.rs","missing_fields.rs","missing_match_arms.rs","missing_unsafe.rs","moved_out_of_ref.rs","mutability_errors.rs","no_such_field.rs","non_exhaustive_let.rs","private_assoc_item.rs","private_field.rs","remove_trailing_return.rs","remove_unnecessary_else.rs","replace_filter_map_next_with_find_map.rs","trait_impl_incorrect_safety.rs","trait_impl_missing_assoc_item.rs","trait_impl_orphan.rs","trait_impl_redundant_assoc_item.rs","type_mismatch.rs","typed_hole.rs","undeclared_label.rs","unimplemented_builtin_macro.rs","unlinked_file.rs","unreachable_label.rs","unresolved_assoc_item.rs","unresolved_extern_crate.rs","unresolved_field.rs","unresolved_ident.rs","unresolved_import.rs","unresolved_macro_call.rs","unresolved_method.rs","unresolved_module.rs","unused_variables.rs","useless_braces.rs"]]],["lib.rs"]]],\
["ide_ssr",["",[],["errors.rs","fragments.rs","from_comment.rs","lib.rs","matching.rs","nester.rs","parsing.rs","replacing.rs","resolving.rs","search.rs"]]],\
["intern",["",[["symbol",[],["symbols.rs"]]],["lib.rs","symbol.rs"]]],\
["la_arena",["",[],["lib.rs","map.rs"]]],\
["limit",["",[],["lib.rs"]]],\
["line_index",["",[],["lib.rs"]]],\
["load_cargo",["",[],["lib.rs"]]],\
["lsp_server",["",[],["error.rs","lib.rs","msg.rs","req_queue.rs","socket.rs","stdio.rs"]]],\
["mbe",["",[["expander",[],["matcher.rs","transcriber.rs"]]],["expander.rs","lib.rs","parser.rs"]]],\
["parser",["",[["grammar",[["expressions",[],["atom.rs"]],["items",[],["adt.rs","consts.rs","traits.rs","use_item.rs"]]],["attributes.rs","expressions.rs","generic_args.rs","generic_params.rs","items.rs","params.rs","paths.rs","patterns.rs","types.rs"]],["syntax_kind",[],["generated.rs"]]],["edition.rs","event.rs","grammar.rs","input.rs","lexed_str.rs","lib.rs","output.rs","parser.rs","shortcuts.rs","syntax_kind.rs","token_set.rs"]]],\
["paths",["",[],["lib.rs"]]],\
["proc_macro_api",["",[["msg",[],["flat.rs"]]],["json.rs","lib.rs","msg.rs","process.rs"]]],\
["proc_macro_srv",["",[],["lib.rs"]]],\
["proc_macro_test",["",[],["lib.rs"]]],\
["profile",["",[],["lib.rs","memory_usage.rs","stop_watch.rs"]]],\
["project_model",["",[],["build_dependencies.rs","cargo_workspace.rs","env.rs","lib.rs","manifest_path.rs","project_json.rs","rustc_cfg.rs","sysroot.rs","target_data_layout.rs","workspace.rs"]]],\
["rust_analyzer",["",[["cli",[],["analysis_stats.rs","diagnostics.rs","flags.rs","highlight.rs","lsif.rs","parse.rs","progress_report.rs","run_tests.rs","rustc_tests.rs","scip.rs","ssr.rs","symbols.rs","unresolved_references.rs"]],["config",[],["patch_old_style.rs"]],["diagnostics",[],["to_proto.rs"]],["handlers",[],["dispatch.rs","notification.rs","request.rs"]],["lsp",[],["capabilities.rs","ext.rs","from_proto.rs","semantic_tokens.rs","to_proto.rs","utils.rs"]],["tracing",[],["config.rs","hprof.rs"]]],["cli.rs","command.rs","config.rs","diagnostics.rs","discover.rs","flycheck.rs","global_state.rs","hack_recover_crate_name.rs","lib.rs","line_index.rs","lsp.rs","main_loop.rs","mem_docs.rs","op_queue.rs","reload.rs","target_spec.rs","task_pool.rs","test_runner.rs","version.rs"]]],\
["rust_analyzer_proc_macro_srv",["",[],["main.rs"]]],\
["salsa",["",[["derived",[],["slot.rs"]],["derived_lru",[],["slot.rs"]],["runtime",[],["dependency_graph.rs","local_state.rs"]]],["debug.rs","derived.rs","derived_lru.rs","durability.rs","hash.rs","input.rs","intern_id.rs","interned.rs","lib.rs","lru.rs","plumbing.rs","revision.rs","runtime.rs","storage.rs"]]],\
["salsa_macros",["",[],["database_storage.rs","lib.rs","parenthesized.rs","query_group.rs"]]],\
["span",["",[],["ast_id.rs","hygiene.rs","lib.rs","map.rs"]]],\
["stdx",["",[["thread",[],["intent.rs","pool.rs"]]],["anymap.rs","lib.rs","macros.rs","non_empty_vec.rs","panic_context.rs","process.rs","rand.rs","thread.rs"]]],\
["syntax",["",[["ast",[["generated",[],["nodes.rs","tokens.rs"]]],["edit.rs","edit_in_place.rs","expr_ext.rs","generated.rs","make.rs","node_ext.rs","operators.rs","prec.rs","token_ext.rs","traits.rs"]],["parsing",[],["reparsing.rs"]],["syntax_editor",[],["edit_algo.rs","mapping.rs"]],["validation",[],["block.rs"]]],["algo.rs","ast.rs","fuzz.rs","hacks.rs","lib.rs","parsing.rs","ptr.rs","syntax_editor.rs","syntax_error.rs","syntax_node.rs","ted.rs","token_text.rs","utils.rs","validation.rs"]]],\
["syntax_bridge",["",[],["lib.rs","prettify_macro_expansion.rs","to_parser_input.rs"]]],\
["test_fixture",["",[],["lib.rs"]]],\
["test_utils",["",[],["assert_linear.rs","bench_fixture.rs","fixture.rs","lib.rs"]]],\
["text_edit",["",[],["lib.rs"]]],\
["toolchain",["",[],["lib.rs"]]],\
["tt",["",[],["buffer.rs","iter.rs","lib.rs"]]],\
["vfs",["",[],["anchored_path.rs","file_set.rs","lib.rs","loader.rs","path_interner.rs","vfs_path.rs"]]],\
["vfs_notify",["",[],["lib.rs"]]],\
["xtask",["",[["codegen",[["grammar",[],["ast_src.rs"]]],["assists_doc_tests.rs","diagnostics_docs.rs","feature_docs.rs","grammar.rs","lints.rs","parser_inline_tests.rs"]],["publish",[],["notes.rs"]],["release",[],["changelog.rs"]]],["codegen.rs","dist.rs","flags.rs","install.rs","main.rs","metrics.rs","publish.rs","release.rs","tidy.rs","util.rs"]]]\
]'));
createSrcSidebar();
